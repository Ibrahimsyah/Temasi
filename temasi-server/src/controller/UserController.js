const {nanoid} = require('nanoid');
const bcrypt = require('bcrypt');

const {Pengguna, Profil} = require('../services/db');
const {SALT_ROUND} = require('../config');

const registerUser = async (payload) => {
  const {
    full_name,
    phone_number,
    is_male,
    email,
    password,
  } = payload;

  const userId = `user-${nanoid(10)}`;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  return {
    name: full_name,
    phoneNumber: phone_number,
    email,
    userId,
  };
};

module.exports = {
  registerUser,
};
