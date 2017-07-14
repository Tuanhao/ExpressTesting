var express = require('express');
var router = express.Router();

/* GET logging page where all the logging info will be shown */
router.get('/', function(req, res, next) {
  res.render('logging');
  console.log(req.body)
});

module.exports = router;
