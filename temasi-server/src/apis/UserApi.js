const {Router} = require('express');
const UserController = require('../controller/UserController');
const {validateUser} = require('../util/middleware');

const router = Router();

const getProfileSummaryHandler = async (req, res, next) => {
  try {
    const {userId} = req.auth;
    const result = await UserController.getProfileSummary(userId);
    res.status(200);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

router.get('/summary', validateUser, getProfileSummaryHandler);

module.exports = router;
