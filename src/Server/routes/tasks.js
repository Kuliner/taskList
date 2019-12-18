const express = require('express');
const passport = require('passport');

const router = express.Router();

/* GET tasks listing. */
router.get('/',
  passport.authenticate('local'),
  (req, res) => {
    res.send('respond with a resource');
  });

router.get('/:id',
  passport.authenticate('local'),
  (req, res) => {
    res.send('respond with a resource');
  });

router.post('/',
  passport.authenticate('local'),
  (req, res) => {
    res.status(200);
  });

module.exports = router;
