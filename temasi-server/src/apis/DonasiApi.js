const {Router} = require('express');

const DonasiController = require('../controller/DonasiController');
const {validateUser} = require('../util/middleware');

const router = Router();

const acceptBantuanHandler = async (req, res, next) => {
  try {
    const {userId} = req.auth;
    const {permohonanId} = req.body;

    const result = await DonasiController.acceptBantuan({userId, permohonanId});
    res.status(201);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getAllDonasiHandler = async (req, res, next) => {
  try {
    const {userId} = req.auth;

    const result = await DonasiController.fetchDonasiByUser(userId);
    res.status(200);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getDonasiDetailHandler = async (req, res, next) => {
  try {
    const {donasi_id} = req.params;

    const result = await DonasiController.fetchDonasiDetail(donasi_id);
    res.status(200);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

router.get('/', validateUser, getAllDonasiHandler);
router.get('/:donasi_id', getDonasiDetailHandler);
router.post('/accept', validateUser, acceptBantuanHandler);

module.exports = router;
