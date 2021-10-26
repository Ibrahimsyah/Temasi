const notFound = (_, res) => {
  res.status(404);
  res.send('Not Found :(');
};

const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode).json({error: err.message});
};

const validateUser = (req, res, next) => {

};

module.exports = {
  notFound,
  errorHandler,
  validateUser,
};
