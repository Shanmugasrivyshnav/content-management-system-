/**
 * Content Block Model
 * -------------------
 * Handles CRUD operations for CMS blocks.
 */

const pool = require("../config/db");

class ContentBlock {
  /**
   * Create Block
   */
  static async create(pageId, type, data, orderIndex) {
    const [result] = await pool.query(
      `
      INSERT INTO content_blocks
      (page_id, type, data, order_index)
      VALUES (?, ?, ?, ?)
      `,
      [pageId, type, JSON.stringify(data), orderIndex],
    );

    return result.insertId;
  }

  /**
   * Get Blocks By Page
   */
  static async getByPageId(pageId) {
    const [rows] = await pool.query(
      `
      SELECT *
      FROM content_blocks
      WHERE page_id = ?
      ORDER BY order_index ASC
      `,
      [pageId],
    );

    return rows.map((block) => ({
      ...block,
      data:
        typeof block.data === "string" ? JSON.parse(block.data) : block.data,
    }));
  }

  /**
   * Get Single Block
   */
  static async getById(id) {
    const [rows] = await pool.query(
      `
      SELECT *
      FROM content_blocks
      WHERE id = ?
      LIMIT 1
      `,
      [id],
    );

    if (!rows.length) {
      return null;
    }

    return {
      ...rows[0],
      data:
        typeof rows[0].data === "string"
          ? JSON.parse(rows[0].data)
          : rows[0].data,
    };
  }

  /**
   * Update Block
   */
  static async update(id, data) {
    await pool.query(
      `
      UPDATE content_blocks
      SET
        data = ?,
        updated_at = NOW()
      WHERE id = ?
      `,
      [JSON.stringify(data), id],
    );
  }

  /**
   * Delete Block
   */
  static async delete(id) {
    await pool.query(
      `
      DELETE FROM content_blocks
      WHERE id = ?
      `,
      [id],
    );
  }
}

module.exports = ContentBlock;
