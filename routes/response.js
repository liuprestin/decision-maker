var express = require('express');
var router = express.Router();

/* GET response to a survey. */
router.get('/response/:id', function(req, res, next) {
    res.send('respond with a resource' + req.params.id);
  });

router.post('/response/:id', function(req, res) {
    res.send('respond with a resource' + req.params.id);
});

module.exports = router;
