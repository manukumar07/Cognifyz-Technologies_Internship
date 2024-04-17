const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);

  // Server-side validation for password type
  var reg_pass = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#\-]).{4,8}$/;

  if (!reg_pass.test(formData.password)) {
    return res.status(400).send("Invalid Password Type");
  }
  res.render("output", { formData });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
