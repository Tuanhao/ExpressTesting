var express = require('express');
var router = express.Router();
const url = require('url');

/* GET logging page where all the logging info will be shown */
router.post('/', function(req, res, next) {
  var body = req.body;
  if (body.firstname == "Hao" && body.lastname == "Chau" && body.password == "123") {
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
});

module.exports = router;
