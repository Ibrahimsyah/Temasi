const {generateToken} = require('../util/tokenizer');
const UserRepository = require('../repositories/UserRepository');
const {UserNotFoundError, ConfirmationCodeNotMatch} = require('../util/error');
const {insertSuccess, updateSuccess} = require('../util/response');

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
    status: false,
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
    is_male: account.is_male,
    status: account.status,
  };
};

const getProfileSummary = async (userId) => {
  const result = await UserRepository.getProfileSummary(userId);
  return result;
};

const changeUserPassword = async (payload) => {
  await UserRepository.changeUserPassword(payload);
  return insertSuccess;
};

const confirmAccount = async (payload) => {
  const {userId, confirmationCode} = payload;
  const userCode = userId.split('-')[1];

  if (userCode === confirmationCode) {
    await UserRepository.verifyUser({userId});
    return updateSuccess;
  }

  throw ConfirmationCodeNotMatch;
};

module.exports = {
  registerUser,
  loginUser,
  getProfileSummary,
  changeUserPassword,
  confirmAccount,
};
