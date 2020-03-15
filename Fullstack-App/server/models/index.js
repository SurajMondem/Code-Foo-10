const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology:true});

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
