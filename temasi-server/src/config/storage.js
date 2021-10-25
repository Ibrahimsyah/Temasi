const multer = require('multer');
const fs = require('fs');
const {nanoid} = require('nanoid');

const folderName = 'media';
module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
      cb(null, folderName);
    },
    filename: (req, file, cb) => {
      const fileExt = file.mimetype.split('/')[1];
      cb(null, `assets-${nanoid(10)}.${fileExt}`);
    },
  }),
};
