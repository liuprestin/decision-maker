var express = require('express');
var router = express.Router();

/* GET home page to Decision Maker App. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

module.exports = router;
