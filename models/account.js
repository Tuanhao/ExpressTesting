var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String
});
var account = mongoose.model('Account', accountSchema);

module.exports = account
