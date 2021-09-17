/* eslint-disable new-cap */
require('dotenv').config();
import express, {Application} from 'express';
const morgan = require('morgan');
import CommonApi from './src/apis/CommonApi';
import UserRepository from './src/repositories/UserRepository';

const postgresDB = require('./src/services/PostgresDb');

const startServer = async () => {
  const port = process.env.PORT;
  const app : Application = express();
  app.use(morgan('dev'));
  app.use(express.json());

  // Init service
  const db = await postgresDB.initDb();

  // Init repository
  const userRepository = new UserRepository(db);

  // Init Api
  const commonApi = new CommonApi();

  // Register routes for each api
  app.use('/', commonApi._router);

  app.listen(port, () => {
    console.log('Server is running at port', port);
  });
};


startServer();
