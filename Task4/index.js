const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);
  // Server-side validation for password type
  var reg_pass = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#\-]).{4,8}$/;

  if (!reg_pass.test(formData.password)) {
    return res
      .status(400)
      .send(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
  }
  return res.render("output", { formData });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
