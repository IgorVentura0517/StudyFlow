const connection = require("../database/connection");

class Tarefa {
  static async create(dados) {
    const { usuarioId, disciplinaId, titulo, descricao, prioridade, dataEntrega } = dados;

    const [result] = await connection.query(
      `INSERT INTO tarefas 
      (usuario_id, disciplina_id, titulo, descricao, prioridade, data_entrega) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [usuarioId, disciplinaId, titulo, descricao, prioridade, dataEntrega]
    );

    return result.insertId;
  }

  static async findAllByUser(usuarioId) {
    const [rows] = await connection.query(
      `SELECT 
        tarefas.*,
        disciplinas.nome AS disciplina_nome
      FROM tarefas
      INNER JOIN disciplinas ON tarefas.disciplina_id = disciplinas.id
      WHERE tarefas.usuario_id = ?
      ORDER BY tarefas.data_entrega ASC`,
      [usuarioId]
    );

    return rows;
  }

  static async findById(id, usuarioId) {
    const [rows] = await connection.query(
      "SELECT * FROM tarefas WHERE id = ? AND usuario_id = ?",
      [id, usuarioId]
    );

    return rows[0];
  }

  static async update(id, usuarioId, dados) {
    const { disciplinaId, titulo, descricao, status, prioridade, dataEntrega } = dados;

    await connection.query(
      `UPDATE tarefas 
       SET disciplina_id = ?, titulo = ?, descricao = ?, status = ?, prioridade = ?, data_entrega = ?
       WHERE id = ? AND usuario_id = ?`,
      [disciplinaId, titulo, descricao, status, prioridade, dataEntrega, id, usuarioId]
    );
  }

  static async delete(id, usuarioId) {
    await connection.query(
      "DELETE FROM tarefas WHERE id = ? AND usuario_id = ?",
      [id, usuarioId]
    );
  }

  static async concluir(id, usuarioId) {
    await connection.query(
      "UPDATE tarefas SET status = 'Concluída' WHERE id = ? AND usuario_id = ?",
      [id, usuarioId]
    );
  }

  static async getResumoByUser(usuarioId) {
  const [rows] = await connection.query(
    `
    SELECT
      COUNT(*) AS total,
      SUM(status = 'Pendente') AS pendentes,
      SUM(status = 'Em andamento') AS em_andamento,
      SUM(status = 'Concluída') AS concluidas
    FROM tarefas
    WHERE usuario_id = ?
    `,
    [usuarioId]
  );

  return rows[0];
}
static async getProximasEntregas(usuarioId) {
  const [rows] = await connection.query(
    `
    SELECT
      tarefas.*,
      disciplinas.nome AS disciplina_nome
    FROM tarefas
    INNER JOIN disciplinas
      ON tarefas.disciplina_id = disciplinas.id
    WHERE tarefas.usuario_id = ?
      AND tarefas.status != 'Concluída'
      AND tarefas.data_entrega IS NOT NULL
    ORDER BY tarefas.data_entrega ASC
    LIMIT 5
    `,
    [usuarioId]
  );

   return rows;
}



module.exports = Tarefa;
