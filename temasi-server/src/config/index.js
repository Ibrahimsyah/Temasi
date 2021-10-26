require('dotenv').config();

module.exports = {
  ENV: process.env.NODE_ENV,
  DSN: process.env.DSN,
  PORT: process.env.PORT || 3000,
  SALT_ROUND: Number(process.env.SALT_ROUND),
  JWT_KEY: process.env.JWT_KEY,
};
