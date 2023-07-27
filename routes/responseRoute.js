const express = require("express");
const database = require("../db/database");
const router = express.Router();

router.post("/", (req, res) => {
  const survey = req.body.surveyresponse;
  const response = req.body.response;
  database.addSurveyResponse(survey).then((result) => {
    if (!result) {
      return res.send({ error: "error" });
    }
    database.addResponse(response).then((result) => {
      if (!result) {
        return res.send({ error: "error" });
      }
      res.send(result);
    });
  });
});

module.exports = router;
