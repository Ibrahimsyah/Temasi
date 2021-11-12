const {nanoid} = require('nanoid');
const {QueryTypes} = require('sequelize');
const {Permohonan, db} = require('../services/db');

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

const getAllPermohonan = async (payload) => {
  const results = db.query(`
  select *
  from (
    select id, 
    pengguna_id , 
    title,
    timeout,
    submit_date,
    type, 
    ( 6371 * acos( cos( radians(-7.861201244513014) ) * cos( radians( p.latitude ) ) * cos( radians( p.longitude ) - radians(112.68620204595044) ) + sin( radians(-7.861201244513014) ) * sin( radians( p.latitude ) ) ) )::int as distance,
    timeout*24 - (date_part('epoch', (now() - submit_date))/3600)::int as time_remaining
    from permohonan p 
  ) as dt
  where (date_part('epoch', (now() - submit_date))/3600)::int <= timeout*24
  order by distance asc
  `, {type: QueryTypes.SELECT});

  return results;
};
module.exports = {
  insertPermohonan,
  getAllPermohonan,
};
