const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const InitializePassport = (dbService) => {
  const verifyPassword = async (user, password) => bcrypt.compare(password, user.password);

  passport.serializeUser((user, done) => {
    done(null, user.login);
  });

  passport.deserializeUser((login, done) => {
    const Users = dbService.usersCollection();
    Users.findOne({ login }, (err, user) => {
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

module.exports = InitializePassport;
