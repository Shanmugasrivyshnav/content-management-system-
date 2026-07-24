/**
 * Authentication Middleware
 *
 * Verifies JWT token before allowing access
 * to protected admin routes.
 */

const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    // Read Authorization Header
    const authHeader = req.headers.authorization;

    console.log("==================================");
    console.log("Authorization Header:", authHeader);

    // Check header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Token not provided.",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    console.log("Received Token:", token);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded User:", decoded);

    // Save user in request
    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token.",
    });
  }
};

module.exports = authenticate;
