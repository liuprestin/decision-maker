const express = require("express");
const database = require("../db/database");
const router = express.Router();

// Create a new survey user
router.post("/createuser", (req, res) => {
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


// Create a new survey user
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
});

// Create a new survey 
router.post("/create", (req, res) => {
  const surveyData = req.body;  
  database
    .addSurvey(surveyData)
    .then((result) => {
      if (!result) {
        return res.send({ error: "error" });
      }
      res.send(result);
    })
    .catch((e) => res.send(e));
});


router.get("/fetchsurvey:id", (req, res) => {
    database
    .getSurvey(req.id)
    .then((result) => {
      if (!result) {
        return res.send({ error: "error" });
      }
      res.send(result);
    })
    .catch((e) => res.send(e));
});

module.exports = router;