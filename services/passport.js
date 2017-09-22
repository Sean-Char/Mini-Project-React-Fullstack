const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys'); // import they keys files


passport.use(           // first argument
  new GoogleStrategy({ // apply id & secret to passport
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, // second argument
    (accessToken, refreshToken, profile, done) => {
      console.log('access token:', accessToken);
      console.log('refresh token:', refreshToken);
      console.log('profile:', profile);
    }
  )
);
