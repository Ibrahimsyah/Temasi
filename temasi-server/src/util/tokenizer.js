const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config');

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_KEY);
};

const decodeToken = async (token) => {
  return jwt.verify(token);
};

module.exports = {generateToken, decodeToken};
