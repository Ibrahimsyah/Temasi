const {nanoid} = require('nanoid');
const {Donasi} = require('../services/db');
const Constant = require('../config/constants');

const insertDonasi = async (payload) => {
  const {permohonanId, userId} = payload;

  const id = `donasi-${nanoid(5)}`;
  const donasiDate = Date.now();
  const status = Constant.STATUS_MATCHED;

  await Donasi.create({
    id,
    pengguna_id: userId,
    permohonan_id: permohonanId,
    donasi_date: donasiDate,
    status,
  });
};

const getAllDonasi = async (userId) => {
  const result = await Donasi.findAll({where: {
    pengguna_id: userId,
  }, order: [
    ['donasi_date', 'desc'],
  ]});

  return result;
};

module.exports = {
  insertDonasi,
  getAllDonasi,
};
