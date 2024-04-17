const express = require("express");
const router = express.Router();
const {
  authenticateToken,
  protectedEndpoint,
} = require("../middleware/authMiddleware");

router.get("/", authenticateToken, protectedEndpoint);

module.exports = router;
