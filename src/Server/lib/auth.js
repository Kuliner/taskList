const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({
    _id: id,
  }, '-password -salt', (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  ((username, password, done) => {
    client.connect(() => {
      const Users = client.db(config.mongo.dbName).collection('Users');

      Users.findOne({ username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });

      client.close();
    });
  }),
));
