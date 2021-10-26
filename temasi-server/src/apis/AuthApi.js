const {Router} = require('express');
const {generateError} = require('../util/error');
const AuthController = require('../controller/UserController');

const router = Router();

const registerHandler = async (req, res) => {
  const payload = req.body;
  const {
    full_name,
    phone_number,
    is_male,
    email,
    password,
    photo,
  } = payload;

  if (!full_name, !phone_number, !is_male, !email, !password, !phone_number, !photo) {
    res.status(400);
    res.json(generateError(400));
    return;
  }

  const result = await AuthController.registerUser(payload);
  res.status(201);
  res.json(result);
};

const loginHandler = async (req, res) => {
  next();
};

router.post('/register', registerHandler);
router.get('/login', loginHandler);

module.exports = router;
