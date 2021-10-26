const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config');

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_KEY);
};

const decodeToken = (token) => {
  return jwt.verify(token, JWT_KEY);
};

module.exports = {generateToken, decodeToken};
