const session = require('express-session');
const cookieparser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./models');

module.exports = (app) => {

  app.use(cookieparser());
  app.use(session({
    secret: 'dice password',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    name: 'sessions', 
    cookie: {
      httpOnly: true,
      maxAge: 20 * 60 * 1000, 
    }
  }));


  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(function (userId, done) {
    db.User.findById(userId)
      .then(function (user) {
        done(null, user);
      })
      .catch(function (err) {
        done(err);
      });
  });


  passport.use(new LocalStrategy((username, password, done) => {
    const errorMsg = 'Invalid username or password';

    db.User.findOne({ username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: errorMsg });
        }


        return user.validatePassword(password)
          .then(isMatch => done(null, isMatch ? user : false, isMatch ? null : { message: errorMsg }));
      })
      .catch(done);
  }));

  app.use(passport.initialize());
  app.use(passport.session());
}
