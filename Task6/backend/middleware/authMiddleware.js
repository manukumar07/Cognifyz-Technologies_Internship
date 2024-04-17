const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer token format

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, "SECRET_TOKEN", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

function protectedEndpoint(req, res) {
  res.json({ message: "Protected endpoint accessed" });
}

module.exports = { authenticateToken, protectedEndpoint };
