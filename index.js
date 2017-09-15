const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys'); // import they keys files

const app = express();

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

//route handelers
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

            // heroku environment setup
const PORT = process.env.PORT || 5000;
app.listen(PORT);
