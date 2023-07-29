const express = require("express");
const database = require("../db/database");
const router = express.Router();

// Route originally to be posting the borden count
// of ranked answers from specified survey

router.get('/insight/:adminUrl', (req, res) => {
  const adminUrl = req.params.adminUrl;
  database
    .getSurveyDataByAdminUrl(adminUrl)
    .then((data) => {
      if (!data) {
        return res.send({ error: "No survey data found for this adminUrl." });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
  });

module.exports = router;