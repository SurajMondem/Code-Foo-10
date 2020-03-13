const express = require('express');
const handle = require('./handlers')

const app = express();
const port = 3888;

app.get('/', (request, response) => response.send("Hello world"));

app.use(handle.notFound);
app.use(handle.errorHandler);

app.listen(port, console.log(`Server started on port ${port}`));
