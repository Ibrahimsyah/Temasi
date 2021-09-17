const knex = require('knex');

const initDb = async () => {
  return new Promise((resolve, reject) => {
    const client = knex({
      client: 'pg',
      connection: 'postgresql://postgres:temasi-db-secret-password@localhost:5454/temasi-db',
    });
    client.raw('select 1 + 1 as result').then(() => {
      console.log('Connected to DB');
      resolve(client);
    }).catch((err) => [
      reject(err),
    ]);
  });
};

module.exports = {initDb};
