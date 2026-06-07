const connection = require("../database/connection");

class User {
  static async create(nome, email, senha) {
    const [result] = await connection.query(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, senha]
    );

    return result.insertId;
  }

  static async findByEmail(email) {
    const [rows] = await connection.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    return rows[0];
  }

  static async findById(id) {
    const [rows] = await connection.query(
      "SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?",
      [id]
    );

    return rows[0];
  }
}

module.exports = User;