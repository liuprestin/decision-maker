var express = require('express');
var router = express.Router();

/* GET data from survey. */
// :id 
router.get('/insight/:id', function(req, res, next) {
  res.send('respond with a resource' + req.params.id);
});

module.exports = router;
