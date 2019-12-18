const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const router = express.Router();

router.post('/register',
  async (req, res) => {
    try {
      const { login, password } = req.body;
      const { dbService } = res;
      const Users = dbService.usersCollection();
      const user = await Users.findOne({ login });

      if (user) {
        res.status(500).send('User exist.');
      } else {
        const hashedPassword = await bcrypt.hash(password, 12);
        await Users.insertOne({ login, password: hashedPassword });
        res.status(200).send('User inserted.');
      }
    } catch (err) {
      res.status(500);
    }
  });

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

module.exports = router;
