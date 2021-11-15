const {insertDonasi, getAllDonasi, getDonasiDetail} = require('../repositories/DonasiRepository');
const {insertSuccess} = require('../util/response');

const acceptBantuan = async (payload) => {
  await insertDonasi(payload);
  return insertSuccess;
};

const fetchDonasiByUser = async (userId) => {
  const result = await getAllDonasi(userId);
  return result;
};

const fetchDonasiDetail = async (donasiId) => {
  const result = await getDonasiDetail(donasiId);
  return result;
};

module.exports = {
  acceptBantuan,
  fetchDonasiByUser,
  fetchDonasiDetail,
};
