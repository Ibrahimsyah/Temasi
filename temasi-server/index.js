const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const {PORT, ENV} = require('./src/config');
const {commonApi, uploadApi, authApi, permohonanApi} = require('./src/apis');
const {notFound, errorHandler} = require('./src/util/middleware');
require('./src/services/db');

const port = PORT;
const app = express();
ENV !== 'TEST' && app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// static file api
app.use('/media', express.static('./media'));

// Register routes for each api
app.use('/', commonApi);
app.use('/auth', authApi);
app.use('/upload', uploadApi);
app.use('/permohonan', permohonanApi);

// Api fallback
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server is running at port', port);
});


module.exports = app;
