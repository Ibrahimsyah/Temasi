const {nanoid} = require('nanoid');
const {Donasi, db} = require('../services/db');
const Constant = require('../config/constants');
const {STATUS_DELIVERED, STATUS_MATCHED, STATUS_NOT_DELIVERED} = require('../config/constants');
const {QueryTypes} = require('sequelize');

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

  return id;
};

const getAllDonasi = async (userId) => {
  const result = await db.query(`
  select d.id, d.permohonan_id, p.title, d.status, p."type" from donasi d 
  inner join permohonan p 
  on p.id = d.permohonan_id 
  where d.pengguna_id = '${userId}'
  order by d.donasi_date desc
  `, {type: QueryTypes.SELECT});

  const mappedResult = result.map((res) => {
    return ({
      ...res,
      status: res.status === STATUS_MATCHED ? STATUS_NOT_DELIVERED : res.status,
    });
  });

  return mappedResult;
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

const confirmDonation = async (donationId) => {
  const receivedDate = Date.now();
  await Donasi.update({
    status: STATUS_DELIVERED,
    received_date: receivedDate,
  }, {
    where: {
      id: donationId,
    },
  });
};

module.exports = {
  insertDonasi,
  getAllDonasi,
  getDonasiDetail,
  confirmDonation,
};
