const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const initializePassport = (dbService) => {
  const verifyPassword = async (user, password) => bcrypt.compare(password, user.password);

  passport.serializeUser((user, done) => {
    // eslint-disable-next-line no-underscore-dangle
    done(null, user._id);
  });

  passport.deserializeUser((_id, done) => {
    const Users = dbService.usersCollection();
    Users.findOne({ _id }, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password',
  },
  ((login, password, done) => {
    const Users = dbService.usersCollection();

    Users.findOne({ login }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!verifyPassword(user, password)) { return done(null, false); }
      return done(null, user);
    });
  })));
};

module.exports = initializePassport;
