const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');


mongoose.connect(keys.mongoURI);

const app = express();

// returns a function and imediately call that function with the app object
require('./routes/authRoutes')(app);



            // heroku environment setup
const PORT = process.env.PORT || 5000;
app.listen(PORT);
