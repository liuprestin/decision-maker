const express = require("express");
const database = require("../db/database");
const router = express.Router();

const urlIdGenerate = require("../util/url_generate");

// Create a new survey user
router.post("/createuser", (req, res) => {
  console.log("createuser");
  const user = req.body;  
  database
    .addSurveycreator(user)
    .then((user) => {
      if (!user) {
        return res.send({ error: "error" });
      }
      res.send(user);
    })
    .catch((e) => res.send(e));
});


/*
router.get("/fetchuser", (req, res) => {
  const user = req.body;  
  database
    .getsurveycreator(user.id)
    .then((user) => {
      if (!user) {
        return res.send({ error: "error" });
      }
      res.send(user);
    })
    .catch((e) => res.send(e));
}); */

// Create a new survey 
router.post("/create", async (req, res) => {
  const surveyData = req.body;  
  
  try {
    
    const adminUrl = urlIdGenerate();
    const sharedUrl = urlIdGenerate();


    const survey = await database.addSurvey({
      adminUrl : adminUrl, 
      sharedUrl : sharedUrl 
    });

    // Loop for each question and set of answers 
    // add to the database
    for (let item of surveyData) {
      const question = await database.addQuestions({
        surveyid: survey.id,
        text: item.question
      });

      // Loop over all answers for a specific question
      for (let answerText of item.answers) {
        const answer = await database.addAnswer({
          anwertext: answerText,
          questionId: question.id
        });
      }
    }
    res.send({ success: true });
  } catch (e) {
    res.send(e);
  }
});


module.exports = router;