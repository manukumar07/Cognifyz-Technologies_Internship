const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const port = 5000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.render("output", { formData });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
