const express = require('express');
require('./services/passport');


const app = express();

// returns a function and imediately call that function with the app object
require('./routes/authRoutes')(app);



            // heroku environment setup
const PORT = process.env.PORT || 5000;
app.listen(PORT);
