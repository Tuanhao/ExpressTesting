var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let attempt
  console.log(req.query)
  req.query.attempt == null ? attempt = 0 : attempt = req.query.attempt
  res.render('index', { title: 'Express', attempt });
});

module.exports = router;
