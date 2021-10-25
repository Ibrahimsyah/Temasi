const {Router} = require('express');
const router = Router();

const pingHandler = (req, res) => {
  res.send('Pong!');
};

const basicHandler = (req, res) => {
  res.send('Welcome to Temasi API!');
};

router.get('/', basicHandler);
router.get('/ping', pingHandler);

module.exports = router;
