/**
 * Content Routes
 * --------------
 * Handles CRUD operations for CMS content blocks.
 */

const express = require("express");

const authenticate = require("../middlewares/auth");

const {
  createBlock,
  getBlocksByPage,
  updateBlock,
  deleteBlock,
} = require("../controllers/content");

const router = express.Router();

/**
 * Public Routes
 */

/**
 * Get all blocks for a page
 * GET /api/v1/content/page/:pageId
 */
router.get("/page/:pageId", getBlocksByPage);

/**
 * Protected Routes
 */

/**
 * Create Block
 */
router.post("/", authenticate, createBlock);

/**
 * Update Block
 */
router.put("/:id", authenticate, updateBlock);

/**
 * Delete Block
 */
router.delete("/:id", authenticate, deleteBlock);

module.exports = router;
