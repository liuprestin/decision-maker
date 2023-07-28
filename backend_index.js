const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// middleware
console.log("********","i am here 1");
app.use(express.static(path.join(__dirname, "./public")));
console.log("********","i am here 2");
app.use(express.urlencoded({ extended: false }));
console.log("********","i am here 3");
app.use(express.json());
console.log("********","i am here 4");
console.log("********","i am here");

const surveyRoutes = require("./routes/surveyRoute");

// /survey/endpoints
app.use("/survey", surveyRoutes);

app.get("/test", (req, res) => {
  res.send("🤗");
});

app.listen(port, (err) => {
  console.log(err || `listening on port ${port} 😎`);
});
