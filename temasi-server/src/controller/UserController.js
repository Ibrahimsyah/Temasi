const {nanoid} = require('nanoid');
const bcrypt = require('bcrypt');

const {Pengguna, Profil} = require('../services/db');
const {SALT_ROUND} = require('../config');
const {generateToken} = require('../util/tokenizer');
const {UserNotFoundError, LoginError, UserExistsError} = require('../util/error');

const registerUser = async (payload) => {
  const {
    full_name,
    phone_number,
    is_male,
    email,
    password,
  } = payload;

  const existingUser = await Pengguna.findOne({where: {email}, raw: true});
  if (existingUser) throw UserExistsError;

  const userId = `user-${nanoid(10)}`;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  const pengguna = {
    id: userId,
    email,
    password: hashedPassword,
  };

  const profil = {
    pengguna_id: userId,
    full_name,
    phone_number,
    is_male,
  };

  await Pengguna.create(pengguna);
  await Profil.create(profil);

  const token = generateToken({userId});

  return {
    name: full_name,
    phoneNumber: phone_number,
    email,
    userId,
    token,
  };
};

const loginUser = async (payload) => {
  const {email, password} = payload;

  const account = await Pengguna.findOne({where: {email}, raw: true});
  if (!account) throw UserNotFoundError;

  const isPasswordMatched = await bcrypt.compare(password, account.password);
  if (!isPasswordMatched) throw LoginError;

  const profile = await Profil.findOne({where: {pengguna_id: account.id}, raw: true});
  const token = generateToken({userId: account.id});

  return {
    name: profile.full_name,
    email,
    userId: account.id,
    phoneNumber: profile.phone_number,
    token,
  };
};

module.exports = {
  registerUser,
  loginUser,
};
