const express = require("express");
const database = require("../db/database");
const router = express.Router();

// Create a new survey user
router.post("/survey", (req, res) => {
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
router.get("/survey", (req, res) => {
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

