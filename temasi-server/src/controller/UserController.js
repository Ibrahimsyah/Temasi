const {generateToken} = require('../util/tokenizer');
const {getUserByEmail, addNewUser, verifyUserPassword, checkUserExists} = require('../repositories/UserRepository');
const {UserNotFoundError} = require('../util/error');

const registerUser = async (payload) => {
  const {
    fullName,
    phoneNumber,
    isMale,
    email,
    password,
  } = payload;

  await checkUserExists(email);

  const userId = await addNewUser({
    email,
    phoneNumber,
    fullName,
    password,
    isMale,
  });

  const token = generateToken({userId});

  return {
    name: fullName,
    phoneNumber: phoneNumber,
    email,
    userId,
    token,
  };
};

const loginUser = async (payload) => {
  const {email, password} = payload;
  const account = await getUserByEmail(email);
  if (!account) throw UserNotFoundError;

  await verifyUserPassword(password, account.password);
  const token = generateToken({userId: account.id});

  return {
    name: account.full_name,
    email,
    userId: account.id,
    phoneNumber: account.phone_number,
    token,
  };
};

module.exports = {
  registerUser,
  loginUser,
};
