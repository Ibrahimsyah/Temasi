const DonasiRepository = require('../repositories/DonasiRepository');
const {updateSuccess} = require('../util/response');

const acceptBantuan = async (payload) => {
  const donasiId = await DonasiRepository.insertDonasi(payload);
  return donasiId;
};

const fetchDonasiByUser = async (userId) => {
  const result = await DonasiRepository.getAllDonasi(userId);
  return result;
};

const fetchDonasiDetail = async (donasiId) => {
  const result = await DonasiRepository.getDonasiDetail(donasiId);
  return result;
};

const confirmDonationReceived = async (donasiId) => {
  await DonasiRepository.confirmDonation(donasiId);
  return updateSuccess;
};

module.exports = {
  acceptBantuan,
  fetchDonasiByUser,
  fetchDonasiDetail,
  confirmDonationReceived,
};
