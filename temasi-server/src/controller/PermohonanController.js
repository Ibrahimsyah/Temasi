const {insertDocument} = require('../repositories/DokumenRepository');
const PermohonanRepository = require('../repositories/PermohonanRepository');
const {insertSuccess} = require('../util/response');

const addPermohonan = async (payload) => {
  const {penggunaId, type, title, documents, timeout, longitude, latitude, address, note} = payload;
  const permohonanData = {
    penggunaId,
    type,
    title,
    timeout,
    longitude,
    latitude,
    address,
    note,
  };

  const permohonanId = await PermohonanRepository.insertPermohonan(permohonanData);
  await insertDocument({
    permohonanId, documents,
  });

  return insertSuccess;
};

const getPermohonan = async (payload) => {
  const result = PermohonanRepository.getAllPermohonan(payload);
  return result;
};

const getUserPermohonan = async (payload) => {
  const result = PermohonanRepository.getSelfPermohonan(payload);
  return result;
};

const getPermohonanDetail = async (permohonanId) => {
  const result = PermohonanRepository.getDetailPermohonan(permohonanId);
  return result;
};

const getDonaturPermohonanDetail = async (permohonanId) => {
  const result = PermohonanRepository.getDonaturPermohonanDetail(permohonanId);
  return result;
};

module.exports = {
  addPermohonan,
  getPermohonan,
  getUserPermohonan,
  getPermohonanDetail,
  getDonaturPermohonanDetail,
};
