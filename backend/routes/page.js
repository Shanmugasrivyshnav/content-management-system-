/**
 * Page Routes
 */

const express = require("express");

const {
  getPages,
  getPage,
  createPage,
  updatePage,
  deletePage,
} = require("../controllers/page");

const authMiddleware = require("../middlewares/auth");

const router = express.Router();

/**
 * GET /api/v1/pages
 * Get all pages
 */
router.get("/", authMiddleware, getPages);

/**
 * GET /api/v1/pages/:id
 * Get one page
 */
router.get("/:id", authMiddleware, getPage);

/**
 * POST /api/v1/pages
 * Create page
 */
router.post("/", authMiddleware, createPage);

/**
 * PUT /api/v1/pages/:id
 * Update page
 */
router.put("/:id", authMiddleware, updatePage);

/**
 * DELETE /api/v1/pages/:id
 * Delete page
 */
router.delete("/:id", authMiddleware, deletePage);

module.exports = router;
