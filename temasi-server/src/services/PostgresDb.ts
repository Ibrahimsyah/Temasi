import {Sequelize} from 'sequelize';

const initDb = async () : Promise<Sequelize> => {
  const client = new Sequelize('postgresql://postgres:temasi-db-secret-password@localhost:5454/temasi-db');
  try {
    await client.authenticate();
    console.log('Connected to DB');
    return Promise.resolve(client);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = {initDb};
