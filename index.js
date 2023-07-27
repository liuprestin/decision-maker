const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const surveyRoutes = require("./routes/surveyRoute");
const questionRoutes = require("./routes/questionsRoute");
const insightRoutes = require("./routes/insightRoute");
const responseRoutes = require("./routes/responseRoute");


// /survey/endpoints
app.use("/survey", surveyRoutes);
//question endpoints
app.use("/question",questionRoutes);
app.use("insight", insightRoutes);
app.use("response",responseRoutes);

app.get("/test", (req, res) => {
  res.send("🤗");
});

app.listen(port, (err) => {
  console.log(err || `listening on port ${port} 😎`);
});
