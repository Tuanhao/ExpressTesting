var express = require('express');
var router = express.Router();

var account = require('../models/account.js')

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('createAccount');
});

router.post('/register', function(req, res) {
  let body = req.body
  var newAccount = new account({ firstName: body.firstName, lastName: body.lastName, password: body.password})
  var query = account.findOne({ firstName : body.firstName});
  query.then(
    (data) => {
      console.log(data)
      if (!data) {
        newAccount.save(function(err) {
          if(err) {
            next(err);
          }
          res.send("congratulation your account have been saved");
        })
      }
      else {
        res.render('createAccount', {warning:"First Name exists"})
      }
    }
  )
})
module.exports = router;
