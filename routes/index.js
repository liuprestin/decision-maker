var express = require('express');
var router = express.Router();

/* GET home page to Decision Maker App. */
router.get('/', function(req, res, next) {
  let templateVars = { title: 'HOME' }

  res.render('index', templateVars);
});

module.exports = router;
