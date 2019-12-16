const express = require('express');

const router = express.Router();

/* GET tasks listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/:id', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  res.status(200);
});

module.exports = router;
