const express = require("express");
const database = require("../db/database");
const router = express.Router();

router.post("/create", (req, res) => {
  const answer = req.body.answers;  
  database
    .addAnswer(answer)
    .then((result) => {
      if (!result) {
        return res.send({ error: "error" });
      }
      res.send(result);
    })
    .catch((e) => res.send(e));
});

router.get("/:id", (req,res) => {
  const id = req.params.id;
  database
  .getAnswerbyId(id)
  .then((result) => {
    if(!result) {
      return res.send({error: "error"});
    }
    res.send(result);
  })
  .catch((e) => res.send(e));
});

router.get("/byquestionId", (req,res) => {
  const id = req.body.questionId;
  database
  .getAnswerbyQuestionId(id)
  .then((result) => {
    if(!result) {
      return res.send({error: "error"});
    }
    res.send(result);
  })
  .catch((e) => res.send(e));
});