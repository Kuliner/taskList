const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (_req, res) => {
  res.render('index', { title: 'Express2' });
});

router.get('/login', (_req, res) => {
  res.send('You have to login to see this');
});

module.exports = router;
