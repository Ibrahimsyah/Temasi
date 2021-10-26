const generateError = (statusCode) => {
  let error;
  switch (statusCode) {
    case 400:
      error = 'data belum lengkap';
      break;
    default:
      break;
  }

  return {error};
};

module.exports = {generateError};
