const {insertDocument} = require('../repositories/DokumenRepository');
const {insertPermohonan, getAllPermohonan} = require('../repositories/PermohonanRepository');
const {insertSuccess} = require('../util/response');

const addPermohonan = async (payload) => {
  const {penggunaId, type, title, documents, timeout, longitude, latitude, address, note} = payload;
  const permohonanData ={
    penggunaId,
    type,
    title,
    timeout,
    longitude,
    latitude,
    address,
    note,
  };

  const permohonanId = await insertPermohonan(permohonanData);
  await insertDocument({
    permohonanId, documents,
  });

  return insertSuccess;
};

const getPermohonan = async (payload) => {
  const result = getAllPermohonan();
  return result;
};

module.exports = {
  addPermohonan,
  getPermohonan,
};
