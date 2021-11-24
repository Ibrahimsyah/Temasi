const nodemailer = require('nodemailer');

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'temasi.covid19@gmail.com',
    pass: 'temasi123',
  },
});

const sendConfirmationEmail = async (to, code) => {
  const html = `Berikut adalah kode konfirmasi akun anda: <b>${code}</b>. Silahkan masukkan kode tersebut ke dalam aplikasi`;

  await mailer.sendMail({
    from: '"TEMASI" <temasi.covid19@gmail.com>',
    to,
    subject: 'Selamat Datang di TEMASI!',
    html,
  });

  console.log(`Email to ${to} sent.`);
};

module.exports = {sendConfirmationEmail};
