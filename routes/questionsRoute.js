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

router.get("/:id", (req,res) => {
  const id = req.id;
  database
  .getQuestions(id)
  .then((result) => {
    if(!result) {
      return res.send({error: "error"});
    }
    res.send(result);
  })
  .catch((e) => res.send(e));
});

router.get("/survey",(req,res) => {
  const id = req.id;
  database
  .getQuestionsBySurvey(id)
  .then((result) => {
    if(!result) {
      return res.send({error:"error"});
    }
    res.send(result);
  })
});

router.get("/all",(req,res) => {
  
  database
  .getAllQuestions()
  .then((result) => {
    if(!result) {
      return res.send({error:"error"});
    }
    res.send(result);
  })
});

module.exports = router;