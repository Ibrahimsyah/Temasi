const {Router} = require('express');
const multer = require('multer');
const {storage} = require('../config/storage');
const UploadController = require('../controller/UploadController');

const router = Router();
const uploader = multer({storage: storage});

const uploadPhotoHandler = (req, res) => {
  const result = UploadController.storeOptimizedImage(req.file);
  res.send(result);
};

router.post('/', uploader.single('photo'), uploadPhotoHandler);

module.exports = router;
