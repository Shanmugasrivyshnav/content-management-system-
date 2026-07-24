const db = require("../config/db");

/**
 * Get all pages
 */
exports.getPages = async (req, res, next) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM pages ORDER BY created_at DESC",
    );

    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

/**
 * Get one page
 */
exports.getPage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await db.execute("SELECT * FROM pages WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Page not found",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

/**
 * Create page
 */
exports.createPage = async (req, res, next) => {
  try {
    const { title, slug } = req.body;

    if (!title || !slug) {
      return res.status(400).json({
        message: "Title and Slug are required",
      });
    }

    const [result] = await db.execute(
      "INSERT INTO pages (title, slug) VALUES (?, ?)",
      [title, slug],
    );

    res.status(201).json({
      success: true,
      id: result.insertId,
      message: "Page created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update page
 */
exports.updatePage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, slug } = req.body;

    await db.execute("UPDATE pages SET title=?, slug=? WHERE id=?", [
      title,
      slug,
      id,
    ]);

    res.json({
      success: true,
      message: "Page updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete page
 */
exports.deletePage = async (req, res, next) => {
  try {
    const { id } = req.params;

    await db.execute("DELETE FROM pages WHERE id=?", [id]);

    res.json({
      success: true,
      message: "Page deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
