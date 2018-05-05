const router = require('express').Router();
const { Education } = require('../db/models/index');

module.exports = router;

router.get('/', (req, res, next) => {
  Education.findAll()
    .then(edu => res.send(edu))
    .catch(next);
});
