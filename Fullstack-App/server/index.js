require('dotenv').config();
const express = require('express');
const db = require('./models');
const handle = require('./handlers');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => response.send("Hello world"));

app.use('/auth', routes.auth);
app.use(handle.notFound);
app.use(handle.errorHandler);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
