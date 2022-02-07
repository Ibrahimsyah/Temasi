const nodemailer = require('nodemailer');

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'temasi.covid19@gmail.com',
    pass: 'yxabwbllwdqxxuwo',
  },
});

const sendConfirmationEmail = async (to, code) => {
  const html = `Berikut adalah kode konfirmasi akun anda: <b>${code}</b>. Silahkan masukkan kode tersebut ke dalam aplikasi`;

  try {
    await mailer.sendMail({
      from: '"TEMASI" <temasi.covid19@gmail.com>',
      to,
      subject: 'Selamat Datang di TEMASI!',
      html,
    });

    console.log(`Email to ${to} sent.`);
  } catch (err) {
    console.log(err);
    throw new Error('Email tidak valid');
  }
};

module.exports = {sendConfirmationEmail};
