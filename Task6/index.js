const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDb = require("./backend/config/db");
const authRoute = require("./backend/routes/authRoute");
const protectRoute = require("./backend/routes/protectRoute");
const PORT = 8000;

const app = express();

app.use(bodyParser.json());
app.use("/api/user", authRoute);
app.use("/api/", protectRoute);

connectDb();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
