const {insertDonasi} = require('../repositories/DonasiRepository');
const {insertSuccess} = require('../util/response');

const acceptBantuan = async (payload) => {
  await insertDonasi(payload);
  return insertSuccess;
};

module.exports = {
  acceptBantuan,
};
