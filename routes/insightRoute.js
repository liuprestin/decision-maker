const express = require("express");
const database = require("../db/database");
const router = express.Router();

router.get('/insight/:id', function(req, res, next) {
    res.send('respond with a resource' + req.params.id);
  });

module.exports = router;