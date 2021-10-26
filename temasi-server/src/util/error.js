
const UserNotFoundError = {
  statusCode: 404,
  message: 'Pengguna tidak ditemukan, Silahkan daftar terlebih dahulu',
};

const LoginError = {
  statusCode: 403,
  message: 'Email atau Kata sandi salah',
};

const UserExistsError = {
  statusCode: 403,
  message: 'Email sudah terdaftar, coba gunakan email lain',
};

const DataIncompleteError = {
  statusCode: 400,
  message: 'Data belum lengkap',
};

const handleError = (res, error) => {
  res.status(error.statusCode);
  res.json({
    error: error.message,
  });
};
module.exports = {
  DataIncompleteError,
  LoginError,
  UserExistsError,
  UserNotFoundError,
  handleError,
};
