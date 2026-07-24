/**
 * Authentication Routes
 * ---------------------
 * Handles admin authentication endpoints.
 */

const express = require("express");
const { login } = require("../controllers/auth");

const router = express.Router();

/**
 * POST /api/v1/auth/login
 * Admin Login
 */
router.post("/login", login);

module.exports = router;
