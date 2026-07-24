/**
 * Authentication Controller
 * -------------------------
 * Handles admin login and JWT token generation.
 */

const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    /**
     * Validate Request Body
     */
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required.",
      });
    }

    /**
     * Find Admin
     */
    const admin = await Admin.findByEmail(email);

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    /**
     * Compare Password
     */
    const isPasswordValid = await Admin.comparePassword(
      password,
      admin.password_hash,
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    /**
     * Generate JWT Token
     */
    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    /**
     * Success Response
     */
    return res.status(200).json({
      success: true,
      message: "Login Successful.",
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

module.exports = {
  login,
};
