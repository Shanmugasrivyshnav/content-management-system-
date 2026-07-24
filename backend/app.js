/**
 * app.js
 * -----------------------
 * Main Express Application
 * Configures middleware,
 * routes and global error handling.
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const contentRoutes = require("./routes/content");
const pageRoutes = require("./routes/page");

const errorHandler = require("./middlewares/error");

const app = express();

/* ==========================================
   CORS Configuration
========================================== */

app.use(
  cors({
    origin: [
      "http://localhost:3000", // Public Frontend
      "http://localhost:3001", // Admin Frontend
    ],
    credentials: true,
  }),
);

/* ==========================================
   Built-in Middleware
========================================== */

// Parse JSON request body
app.use(express.json());

// Parse URL Encoded Data
app.use(express.urlencoded({ extended: true }));

/* ==========================================
   Health Check Route
========================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CMS Backend API is running successfully.",
  });
});

/* ==========================================
   API Routes
========================================== */

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/content", contentRoutes);
app.use("/api/v1/pages", pageRoutes);

/* ==========================================
   404 Route Handler
========================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/* ==========================================
   Global Error Handler
========================================== */

app.use(errorHandler);

/* ==========================================
   Export Express App
========================================== */

module.exports = app;
