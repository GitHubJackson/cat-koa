const mongoose = require('mongoose');
const { dbUrl } = require('../config/dbConfig')

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!');
});

module.exports = mongoose