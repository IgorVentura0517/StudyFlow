const connection = require("../database/connection");

class Disciplina {
  static async create(usuarioId, nome, descricao) {
    const [result] = await connection.query(
      "INSERT INTO disciplinas (usuario_id, nome, descricao) VALUES (?, ?, ?)",
      [usuarioId, nome, descricao]
    );

    return result.insertId;
  }

  static async findAllByUser(usuarioId) {
    const [rows] = await connection.query(
      "SELECT * FROM disciplinas WHERE usuario_id = ? ORDER BY nome ASC",
      [usuarioId]
    );

    return rows;
  }

  static async findById(id, usuarioId) {
    const [rows] = await connection.query(
      "SELECT * FROM disciplinas WHERE id = ? AND usuario_id = ?",
      [id, usuarioId]
    );

    return rows[0];
  }

  static async update(id, usuarioId, nome, descricao) {
    await connection.query(
      "UPDATE disciplinas SET nome = ?, descricao = ? WHERE id = ? AND usuario_id = ?",
      [nome, descricao, id, usuarioId]
    );
  }

  static async delete(id, usuarioId) {
    await connection.query(
      "DELETE FROM disciplinas WHERE id = ? AND usuario_id = ?",
      [id, usuarioId]
    );
  }

  static async countByUser(usuarioId) {
  const [rows] = await connection.query(
    "SELECT COUNT(*) AS total FROM disciplinas WHERE usuario_id = ?",
    [usuarioId]
  );

  return rows[0].total;
}
}

module.exports = Disciplina;