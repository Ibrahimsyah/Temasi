const {generateToken} = require('../util/tokenizer');
const {getUserByEmail, addNewUser, verifyUserPassword, checkUserExists} = require('../repositories/UserRepository');
const {UserNotFoundError} = require('../util/error');

const registerUser = async (payload) => {
  const {
    fullName,
    phoneNumber,
    email,
    photo,
  } = payload;

  await checkUserExists(email);

  const userId = await addNewUser(payload);

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
  const account = await getUserByEmail(email);
  if (!account) throw UserNotFoundError;

  await verifyUserPassword(password, account.password);
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

module.exports = {
  registerUser,
  loginUser,
};
