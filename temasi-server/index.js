require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const {commonApi, uploadApi, exceptionApi} = require('./src/apis');
require('./src/services/db');

const startServer = async () => {
  const port = process.env.PORT;
  const app = express();
  app.use(morgan('dev'));
  app.use(express.json());

  // static file api
  app.use('/media', express.static('./media'));

  // Register routes for each api
  app.use('/', commonApi);
  app.use('/upload', uploadApi);

  // Api fallback
  app.use(exceptionApi);

  app.listen(port, () => {
    console.log('Server is running at port', port);
  });
};

startServer();
