const {Router} = require('express');

const router = Router();
const notFound = (_, res) => {
  res.status(404);
  res.send('Not Found :(');
};
router.use(notFound);

module.exports = router;
