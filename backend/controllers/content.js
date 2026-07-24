/**
 * Content Block Controller
 * ------------------------
 * Handles CRUD operations for CMS content blocks.
 */

const ContentBlock = require("../models/ContentBlock");

/**
 * Allowed Block Types
 */
const allowedBlockTypes = ["hero", "header", "text", "grid", "table", "math"];

/**
 * Create Content Block
 */
const createBlock = async (req, res) => {
  try {
    const { pageId, type, data, orderIndex } = req.body;

    /**
     * Validate Required Fields
     */
    if (!pageId || !type || data === undefined) {
      return res.status(400).json({
        success: false,
        message: "pageId, type and data are required.",
      });
    }

    /**
     * Validate Block Type
     */
    if (!allowedBlockTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid block type.",
      });
    }

    /**
     * Create Block
     */
    const id = await ContentBlock.create(pageId, type, data, orderIndex || 0);

    return res.status(201).json({
      success: true,
      message: "Content Block Created Successfully.",
      id,
    });
  } catch (error) {
    console.error("Create Block Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

/**
 * Get Blocks By Page
 */
const getBlocksByPage = async (req, res) => {
  try {
    const { pageId } = req.params;

    const blocks = await ContentBlock.getByPageId(pageId);

    return res.status(200).json({
      success: true,
      count: blocks.length,
      data: blocks,
    });
  } catch (error) {
    console.error("Fetch Blocks Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

/**
 * Update Content Block
 */
const updateBlock = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    if (data === undefined) {
      return res.status(400).json({
        success: false,
        message: "Content data is required.",
      });
    }

    const block = await ContentBlock.getById(id);

    if (!block) {
      return res.status(404).json({
        success: false,
        message: "Content Block Not Found.",
      });
    }

    await ContentBlock.update(id, data);

    return res.status(200).json({
      success: true,
      message: "Content Block Updated Successfully.",
    });
  } catch (error) {
    console.error("Update Block Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

/**
 * Delete Content Block
 */
const deleteBlock = async (req, res) => {
  try {
    const { id } = req.params;

    const block = await ContentBlock.getById(id);

    if (!block) {
      return res.status(404).json({
        success: false,
        message: "Content Block Not Found.",
      });
    }

    await ContentBlock.delete(id);

    return res.status(200).json({
      success: true,
      message: "Content Block Deleted Successfully.",
    });
  } catch (error) {
    console.error("Delete Block Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

module.exports = {
  createBlock,
  getBlocksByPage,
  updateBlock,
  deleteBlock,
};
