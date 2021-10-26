const express = require('express');
const morgan = require('morgan');

const {PORT, ENV} = require('./src/config');
const {commonApi, uploadApi, exceptionApi, authApi} = require('./src/apis');
require('./src/services/db');

const port = PORT;
const app = express();
ENV !== 'TEST' && app.use(morgan('dev'));
app.use(express.json());

// static file api
app.use('/media', express.static('./media'));

// Register routes for each api
app.use('/', commonApi);
app.use('/auth', authApi);
app.use('/upload', uploadApi);

// Api fallback
app.use(exceptionApi);

app.listen(port, () => {
  console.log('Server is running at port', port);
});


module.exports = app;
