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

const getAllPermohonanHandler = async (req, res, next) => {
  try {
    const result = await PermohonanController.getPermohonan(req.query);
    res.status(200);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getSelfPermohonanHandler = async (req, res, next) => {
  try {
    const {userId} = req.auth;
    const result = await PermohonanController.getUserPermohonan(userId);
    res.status(200);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getPermohonanDetailHandler = async (req, res, next) => {
  try {
    const {permohonan_id} = req.params;
    const result = await PermohonanController.getPermohonanDetail(permohonan_id);
    res.status(200);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getDonaturPermohonanDetailHandler = async (req, res, next) => {
  try {
    const {permohonan_id} = req.params;
    const result = await PermohonanController.getDonaturPermohonanDetail(permohonan_id);
    res.status(200);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

router.post('/', validateUser, addPermohonanHandler);
router.get('/self', validateUser, getSelfPermohonanHandler);
router.get('/:permohonan_id', validateUser, getPermohonanDetailHandler);
router.get('/', getAllPermohonanHandler);
router.get('/matched/:permohonan_id', getDonaturPermohonanDetailHandler);

module.exports = router;
