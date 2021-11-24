
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

const UnauthorizedError = {
  statusCode: 403,
  message: 'Silahkan masuk terlebih dahulu',
};

const PasswordNotMatch = {
  statusCode: 400,
  message: 'Kata sandi lama salah',
};

const ConfirmationCodeNotMatch = {
  statusCode: 403,
  message: 'Kode konfirmasi salah',
};

module.exports = {
  DataIncompleteError,
  LoginError,
  UserExistsError,
  UserNotFoundError,
  UnauthorizedError,
  PasswordNotMatch,
  ConfirmationCodeNotMatch,
};
