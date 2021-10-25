require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const {commonApi} = require('./src/apis');
require('./src/services/PostgresDb');

const startServer = async () => {
  const port = process.env.PORT;
  const app = express();
  app.use(morgan('dev'));
  app.use(express.json());

  // Register routes for each api
  app.use('/', commonApi);

  app.listen(port, () => {
    console.log('Server is running at port', port);
  });
};

startServer();
