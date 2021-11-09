const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');

const {Pengguna} = require('../services/db');
const {SALT_ROUND} = require('../config');
const {LoginError, UserExistsError} = require('../util/error');

const checkUserExists = async (email) => {
  const result = await Pengguna.findOne({where: {email}, raw: true});
  if (result) throw UserExistsError;
};

const getUserByEmail = async (email) => {
  const result = await Pengguna.findOne({where: {email}, raw: true});
  return result;
};

const addNewUser = async (payload) => {
  const {email, fullName, phoneNumber, isMale, password, photo} = payload;
  const userId = `user-${nanoid(10)}`;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
  const pengguna = {
    id: userId,
    email,
    password: hashedPassword,
    pengguna_id: userId,
    full_name: fullName,
    phone_number: phoneNumber,
    is_male: isMale,
    photo,
  };
  await Pengguna.create(pengguna);
  return userId;
};

const verifyUserPassword = async (password, accountPassword) => {
  const isPasswordMatched = await bcrypt.compare(password, accountPassword);
  if (!isPasswordMatched) throw LoginError;
};

module.exports = {
  getUserByEmail,
  addNewUser,
  verifyUserPassword,
  checkUserExists,
};
