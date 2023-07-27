const express = require("express");
const database = require("../db/database");
const router = express.Router();


// Create a new Question 
router.post("/create", (req, res) => {
  const questions = req.body;  
  database
    .addQuestions(questions)
    .then((result) => {
      if (!result) {
        return res.send({ error: "error" });
      }
      res.send(result);
    })
    .catch((e) => res.send(e));
});

module.exports = router;