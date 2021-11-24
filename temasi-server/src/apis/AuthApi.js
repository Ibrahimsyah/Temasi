const {Router} = require('express');
const {DataIncompleteError} = require('../util/error');
const AuthController = require('../controller/UserController');
const {validateUser} = require('../util/middleware');

const router = Router();

const registerHandler = async (req, res, next) => {
  try {
    const payload = req.body;
    const {
      fullName,
      phoneNumber,
      isMale,
      email,
      password,
      photo,
    } = payload;

    if (!fullName, !phoneNumber, !isMale, !email, !password, !photo) {
      throw DataIncompleteError;
    }

    const result = await AuthController.registerUser(payload);
    res.status(201);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const loginHandler = async (req, res, next) => {
  try {
    const payload = req.body;
    const {
      email,
      password,
    } = payload;

    if (!email, !password) throw DataIncompleteError;

    const result = await AuthController.loginUser(payload);
    if (result) {
      res.status(200);
      res.json(result);
    }
  } catch (err) {
    next(err);
  }
};

const changePasswordHandler = async (req, res, next) => {
  try {
    const {userId} = req.auth;
    const payload ={
      userId,
      ...req.body,
    };

    const result = await AuthController.changeUserPassword(payload);
    res.status(201);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.post('/changepassword', validateUser, changePasswordHandler);

module.exports = router;
