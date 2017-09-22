const passport = require('passport');// original npm module

module.exports = (app) => {
  //route handelers
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
