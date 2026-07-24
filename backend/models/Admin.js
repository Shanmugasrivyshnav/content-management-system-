/**
 * Admin Model
 * -----------
 * Handles all database operations related to admins.
 */

const pool = require("../config/db");
const bcrypt = require("bcryptjs");

class Admin {
  /**
   * Create Admin
   */
  static async create(username, email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      `
      INSERT INTO admins
      (username, email, password_hash)
      VALUES (?, ?, ?)
      `,
      [username, email, passwordHash],
    );

    return result.insertId;
  }

  /**
   * Find Admin By Email
   */
  static async findByEmail(email) {
    const [rows] = await pool.query(
      `
      SELECT *
      FROM admins
      WHERE email = ?
      LIMIT 1
      `,
      [email],
    );

    return rows[0] || null;
  }

  /**
   * Find Admin By ID
   */
  static async findById(id) {
    const [rows] = await pool.query(
      `
      SELECT id, username, email
      FROM admins
      WHERE id = ?
      LIMIT 1
      `,
      [id],
    );

    return rows[0] || null;
  }

  /**
   * Compare Password
   */
  static async comparePassword(password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
  }
}

module.exports = Admin;
