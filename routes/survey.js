var express = require('express');
var router = express.Router();

/* GET survey page. */
router.get('/survey', function(req, res, next) {
    res.send('respond with a resource' + req.params.id);
  });

/* POST to create a new survey */
router.post('/survey', function(req, res) {
    res.send('respond with a resource' + req.params.id);
});


/* GET survey editor page. */
router.get('/survey/questions', function(req, res, next) {
    res.send('respond with a resource' + req.params.id);
  });

/* POST to finalize creating new survey */
router.post('/survey/question/:id', function(req, res) {
    res.send('respond with a resource' + req.params.id);
});




module.exports = router;
