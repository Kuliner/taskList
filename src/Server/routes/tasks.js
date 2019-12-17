const express = require('express');
const passport = require('passport');

const router = express.Router();

/* GET tasks listing. */
router.get('/',
  passport.authenticate('local'),
  (req, res) => {
    res.send('respond with a resource');
  });

router.get('/:id', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  res.status(200);
});

module.exports = router;
