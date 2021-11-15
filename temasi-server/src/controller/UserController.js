const {generateToken} = require('../util/tokenizer');
const UserRepository = require('../repositories/UserRepository');
const {UserNotFoundError} = require('../util/error');

const registerUser = async (payload) => {
  const {
    fullName,
    phoneNumber,
    email,
    photo,
  } = payload;

  await UserRepository.checkUserExists(email);

  const userId = await UserRepository.addNewUser(payload);

  const token = generateToken({userId});

  return {
    fullName,
    phoneNumber: phoneNumber,
    email,
    userId,
    token,
    photo,
  };
};

const loginUser = async (payload) => {
  const {email, password} = payload;
  const account = await UserRepository.getUserByEmail(email);
  if (!account) throw UserNotFoundError;

  await UserRepository.verifyUserPassword(password, account.password);
  const token = generateToken({userId: account.id});

  return {
    fullName: account.full_name,
    email,
    userId: account.id,
    photo: account.photo,
    phoneNumber: account.phone_number,
    token,
  };
};

const getProfileSummary = async (userId) => {
  const result = await UserRepository.getProfileSummary(userId);
  return result;
};

module.exports = {
  registerUser,
  loginUser,
  getProfileSummary,
};
