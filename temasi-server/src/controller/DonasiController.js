const {insertDonasi, getAllDonasi} = require('../repositories/DonasiRepository');
const {insertSuccess} = require('../util/response');

const acceptBantuan = async (payload) => {
  await insertDonasi(payload);
  return insertSuccess;
};

const fetchDonasiByUser = async (userId) => {
  const result = await getAllDonasi(userId);
  return result;
};

module.exports = {
  acceptBantuan,
  fetchDonasiByUser,
};
