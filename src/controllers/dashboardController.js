const Tarefa = require("../models/Tarefa");
const Disciplina = require("../models/Disciplina");

class DashboardController {
  static async index(req, res) {
    const usuarioId = req.session.usuario.id;

    const resumoTarefas = await Tarefa.getResumoByUser(usuarioId);
    const totalDisciplinas = await Disciplina.countByUser(usuarioId);

    res.render("dashboard", {
      usuario: req.session.usuario,
      resumoTarefas,
      totalDisciplinas
    });
  }
}

module.exports = DashboardController;