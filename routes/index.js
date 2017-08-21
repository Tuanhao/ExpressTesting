var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.clearCookie('id')
  let attempt
  let warning = req.query.warning? req.query.warning : ""
  req.query.attempt == null ? attempt = 0 : attempt = req.query.attempt
  res.render('index', { title: 'Express', attempt, warning});
});

module.exports = router;
