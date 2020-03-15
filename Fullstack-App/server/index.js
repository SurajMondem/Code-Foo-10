require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const handle = require('./handlers');
const routes = require('./routes');
const db = require('./models');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

//Index route
app.get('/', (request, response) => {
    response.send("Hello world")
});

app.use('/auth', routes.auth);
app.use(handle.notFound);
app.use(handle.errorHandler);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


//Start Server
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT)
});
