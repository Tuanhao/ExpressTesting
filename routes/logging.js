var express = require('express');
var router = express.Router();
const url = require('url');
var account = require('../models/account.js')

router.post('/', function(req, res, next) {
  var body = req.body;
  var query = account.findOne({ firstName: body.firstName}, function(err, docs) {
    if (err) return handleError(err);
    if (body.lastName == docs.lastName && body.password == docs.password) {
      res.render('logging');
    } else {
      let newAttempt = Number(req.body.attempt) + 1
      res.redirect(url.format({
        pathname:"/",
        query: {
          attempt: newAttempt
        }
      }))
    }
  })
})
module.exports = router;
