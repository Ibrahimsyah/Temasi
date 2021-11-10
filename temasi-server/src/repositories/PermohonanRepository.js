const {nanoid} = require('nanoid');
const {Permohonan} = require('../services/db');

const insertPermohonan = async (payload) => {
  const {penggunaId, title, type, timeout, longitude, latitude, address, note} = payload;
  const id = `permohonan-${nanoid(10)}`;
  const submitDate = Date.now();
  const data = {
    id,
    pengguna_id: penggunaId,
    title,
    type,
    submit_date: submitDate,
    timeout,
    longitude,
    latitude,
    address,
    note,
  };

  await Permohonan.create(data);
  return id;
};

module.exports = {
  insertPermohonan,
};
