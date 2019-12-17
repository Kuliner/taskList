const express = require('express');
const bcrypt = require('bcryptjs');
const client = require('../lib/DbService');
const config = require('../config');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { login, password } = req.body;
    client.connect(async () => {
      const Users = client.db(config.mongo.dbName).collection('Users');
      const user = await Users.findOne({ login });

      if (user) {
        res.status(500).send('User exist.');
      } else {
        const hashedPassword = await bcrypt.hash(password, 12);
        await Users.insertOne({ login, password: hashedPassword });
        client.close();
        res.status(200);
      }
    });
  } catch (err) {
    client.close();
    res.status(500);
  }
});
