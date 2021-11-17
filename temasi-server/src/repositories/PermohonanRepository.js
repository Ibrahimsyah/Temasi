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
  const {order = 'time_remaining', sort = 'asc', q, type, latitude, longitude} = payload || {};

  let query = `
  select 
    dt.id,
    title,
    type,
    time_remaining,
    distance
  from (
    select id, 
    pengguna_id , 
    title,
    timeout,
    submit_date,
    type, 
    ( 6371 * acos( cos( radians(${latitude}) ) * cos( radians( p.latitude ) ) * cos( radians( p.longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * sin( radians( p.latitude ) ) ) )::int as distance,
    timeout*24 - (date_part('epoch', (now() - submit_date))/3600)::int as time_remaining
    from permohonan p 
  ) as dt
  left join donasi d on d.permohonan_id = dt.id 
  where (date_part('epoch', (now() - submit_date))/3600)::int <= timeout*24 and d.id is null
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
    let timeRemaining = time_remaining >= 24 ? `${Math.floor(time_remaining / 24)} Hari Lagi` : `${time_remaining} Jam Lagi`;
    if (time_remaining === 0) {
      timeRemaining = 'Segera Berakhir';
    }
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

const getSelfPermohonan = async (userId) => {
  const query = `
  select dt.id, title, type, status, time_remaining
  from (
    select p.id, 
    pengguna_id , 
    title,
    timeout,
    submit_date,
    type, 
    timeout*24 - (date_part('epoch', (now() - submit_date))/3600)::int as time_remaining
    from permohonan p 
    where pengguna_id = '${userId}'
  ) as dt
  left join donasi d on dt.id  = d.permohonan_id 
  where (date_part('epoch', (now() - submit_date))/3600)::int <= timeout*24
  `;

  const results = await db.query(query, {type: QueryTypes.SELECT});
  const mappedResult = results.map((permohonan) => {
    const {id, title, type, time_remaining, status} = permohonan;
    let timeRemaining = time_remaining >= 24 ? `${Math.floor(time_remaining / 24)} Hari Lagi` : `${time_remaining} Jam Lagi`;
    if (time_remaining === 0) {
      timeRemaining = 'Segera Berakhir';
    }
    return {
      id,
      title,
      type,
      status,
      timeRemaining,
    };
  });

  return mappedResult;
};

const getDetailPermohonan = async (permohonanId) => {
  const result = await db.query(`
  select 
    string_agg(d.document_url , ', ') as documents, 
    p.id, 
    p.pengguna_id,
    p2.photo,
    p2.full_name,
    p.latitude,
    p.longitude,
    p.address,
    title, 
    type, 
    note,
    ( 6371 * acos( cos( radians(-7.861201244513014) ) * cos( radians(p.latitude) ) * cos( radians(p.longitude) - radians(112.68620204595044) ) + sin( radians(-7.861201244513014) ) * sin( radians(p.latitude) ) ) )::int as distance, 
    timeout * 24 - (date_part('epoch', (now() - submit_date))/ 3600)::int as time_remaining
  from permohonan p
  inner join dokumen d on d.permohonan_id = p.id
  inner join pengguna p2 on p.pengguna_id = p2.id
  where p.id = '${permohonanId}'
  group by p.id, 
  p.pengguna_id,
  p2.photo,
  p2.full_name,
  p.latitude,
  p.longitude,
  p.address,
  title, 
  type, 
  note, time_remaining
  `);

  const permohonan = result[0][0];
  permohonan.documents = permohonan.documents.split(', ');

  return permohonan;
};

const getDonaturPermohonanDetail = async (permohonanId) => {
  const result = await db.query(`
  select p.id,
  d.id as donation_id,
  p."type" ,
  p.title ,
  p2.full_name ,
  p2.photo
  from permohonan p 
  inner join donasi d on p.id  = d.permohonan_id
  inner join pengguna p2 on p2.id = d.pengguna_id 
  where p.id = '${permohonanId}'
  `);

  const permohonan = result[0][0];
  return permohonan;
};

module.exports = {
  insertPermohonan,
  getAllPermohonan,
  getSelfPermohonan,
  getDetailPermohonan,
  getDonaturPermohonanDetail,
};
