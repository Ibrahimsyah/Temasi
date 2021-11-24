const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');

const {Pengguna, db} = require('../services/db');
const {SALT_ROUND} = require('../config');
const {LoginError, UserExistsError, PasswordNotMatch} = require('../util/error');

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

const getProfileSummary = async (userId) => {
  const result = await db.query(`
  select * from
  (select count(*) permohonan_count from permohonan p where p.pengguna_id = '${userId}') as p,
  (select count(*) donasi_count from donasi d where d.pengguna_id = '${userId}' and d.status = 3) as d
  `);

  return result[0][0];
};

const changeUserPassword = async (payload) => {
  const {userId, oldPassword, newPassword} = payload;

  const user = await Pengguna.findOne({where: {
    id: userId,
  }});

  const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);
  if (!isPasswordMatched) throw PasswordNotMatch;

  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUND);

  await Pengguna.update({password: hashedPassword}, {where: {
    id: userId,
  }});
};

module.exports = {
  getUserByEmail,
  addNewUser,
  verifyUserPassword,
  checkUserExists,
  getProfileSummary,
  changeUserPassword,
};
