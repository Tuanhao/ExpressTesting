var mongoose = require('./mongoose.js')


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('createAccount');
  console.log(mongoose.base)
});

router.post('/saveAccount', function(req, res) {
  let body = req.body
  var newAccount = new Account({ firstName: body.firstName, lastName: body.lastName, password: body.password})
  newAccount.save(function(err) {
    if(err) return console.log(error(err))
  })
  res.send("congratulation your account have been saved")
})
module.exports = router;
