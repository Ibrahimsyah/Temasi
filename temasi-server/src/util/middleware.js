const {UnauthorizedError} = require('./error');
const {decodeToken} = require('./tokenizer');

const notFound = (_, res) => {
  res.status(404);
  res.send('Not Found :(');
};

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({error: err.message || 'Kesalahan Sistem'});
};

const validateUser = (req, _, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) throw UnauthorizedError;
  try {
    const tokenPayload = decodeToken(token);
    req.auth = tokenPayload;
    next();
  } catch (error) {
    throw UnauthorizedError;
  }
};

const getUserId = (req, _, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token) {
    const tokenPayload = decodeToken(token);
    req.auth = tokenPayload;
  }
  next();
};

module.exports = {
  notFound,
  errorHandler,
  validateUser,
  getUserId,
};
