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
  const {order = 'time_remaining', sort = 'asc', q, type} = payload || {};

  let query = `
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
  `;

  if (q) {
    query += ` and lower(title) like '%${q}%'`;
  }
  if (type) {
    query += ` and type = ${type}`;
  }
  if (order) {
    query += ` order by ${order} ${sort}`;
  }

  const results = await db.query(query, {type: QueryTypes.SELECT});
  const mappedResult = results.map((permohonan) => {
    const {id, pengguna_id, title, type, distance, time_remaining} = permohonan;
    const timeRemaining = time_remaining >= 24 ? `${Math.floor(time_remaining / 24)} Hari` : `${time_remaining} Jam`;
    const newDistance = `${distance} KM`;
    return {
      id,
      penggunaId: pengguna_id,
      title,
      type,
      distance: newDistance,
      timeRemaining,
    };
  });
  return mappedResult;
};
module.exports = {
  insertPermohonan,
  getAllPermohonan,
};
