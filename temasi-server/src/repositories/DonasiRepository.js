const {nanoid} = require('nanoid');
const {Donasi, db} = require('../services/db');
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

const getDonasiDetail = async (donasiId) => {
  const result = await db.query(`
  select d.id, 
    p2.phone_number, 
    p.title ,
    p."type" ,
    p.latitude, 
    p.longitude, 
    p.address, 
    p.note 
  from donasi d 
  inner join permohonan p on p.id  = d.permohonan_id 
  inner join pengguna p2 ON p2.id = p.pengguna_id 
  where d.id = '${donasiId}'
  `);

  const donasi = result[0][0];

  return donasi;
};

module.exports = {
  insertDonasi,
  getAllDonasi,
  getDonasiDetail,
};
