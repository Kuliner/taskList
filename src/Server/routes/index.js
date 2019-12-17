const express = require('express');
const bcrypt = require('bcryptjs');
const client = require('../lib/db');
const config = require('../config');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/register', async (req, res) => {
  try {
    const { login, password } = req.body;
    client.connect(async () => {
      const Users = client.db(config.mongo.dbName).collection('Users');
      const user = await Users.findOne(req.query.login);

      if (user) {
        res.status(500).send('User exist.');
      } else {
        const hashedPassword = await bcrypt.hash(password);
        await Users.insertOne({ login, password: hashedPassword });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
