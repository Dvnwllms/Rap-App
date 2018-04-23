const mongoose = require('mongoose');

module.exports = function() {
  var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/passport-examples";

  mongoose.Promise = global.Promise;
  
  return mongoose.connect(MONGODB_URI);
}
