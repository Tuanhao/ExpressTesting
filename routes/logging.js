var express = require('express');
var router = express.Router();
const url = require('url');
var account = require('../models/account.js')

router.post('/', function(req, res, next) {
  var body = req.body;
  var query = account.findOne({ firstName: body.firstName}, (err, docs) => {
    if (err) return handleError(err);
    if( docs == null) {
      res.render('index', { title: 'Express', warning: 'First name does not exist, please create an account' })
    }
    else {
      if (body.lastName == docs.lastName && body.password == docs.password) {
        res.cookie('id',docs.id)
        res.render('logging', {firstName: docs.firstName});
      } else {
        let newAttempt = Number(req.body.attempt) + 1
        res.redirect(url.format({
          pathname:"/",
          query: {
            attempt: newAttempt
          }
        }))
      }
    }
  });
})
module.exports = router;
