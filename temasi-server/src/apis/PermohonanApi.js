const {Router} = require('express');

const {DataIncompleteError} = require('../util/error');
const PermohonanController = require('../controller/PermohonanController');
const {validateUser} = require('../util/middleware');

const router = Router();

const addPermohonanHandler = async (req, res, next) => {
  try {
    const payload = req.body;
    const {
      type,
      title,
      timeout,
      longitude,
      latitude,
      address,
      documents,
    } = payload;

    if (!type || !title || !timeout || !longitude || !latitude || !address || documents.length <= 0) {
      throw DataIncompleteError;
    }

    const data = {
      ...payload,
      penggunaId: req.auth.userId,
    };
    const result = await PermohonanController.addPermohonan(data);
    res.status(201);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

router.post('/', validateUser, addPermohonanHandler);

module.exports = router;
