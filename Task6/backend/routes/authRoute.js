const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/authController");

router.route("/register").post(register); // Use `register` directly
router.route("/login").post(login); // Use `login` directly

module.exports = router;
