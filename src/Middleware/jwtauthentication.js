const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  // Extract the token from the Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  // Remove "Bearer " prefix if present
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7, authHeader.length)
    : authHeader;

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Debugging: Log the token and secret key being used
    console.log("Verifying token:", token);
    console.log("Using secret key:", "your-secret-key");

    // Verify the token
    const decoded = jwt.verify(token, "your-secret-key");

    // Debugging: Log the decoded token
    console.log("Decoded token data:", decoded);

    // Attach user information to request object
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ error: "Invalid token." });
  }
}

module.exports = verifyToken;
