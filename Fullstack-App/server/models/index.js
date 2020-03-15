const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
