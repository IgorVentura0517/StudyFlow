const Tarefa = require("../models/Tarefa");
const Disciplina = require("../models/Disciplina");

class TarefaController {
  static async listar(req, res) {
    const usuarioId = req.session.usuario.id;

    const tarefas = await Tarefa.findAllByUser(usuarioId);

    res.render("tarefas/index", { tarefas });
  }

  static async nova(req, res) {
    const usuarioId = req.session.usuario.id;

    const disciplinas = await Disciplina.findAllByUser(usuarioId);

    res.render("tarefas/nova", { disciplinas });
  }

  static async criar(req, res) {
    const usuarioId = req.session.usuario.id;

    const { disciplinaId, titulo, descricao, prioridade, dataEntrega } = req.body;

    await Tarefa.create({
      usuarioId,
      disciplinaId,
      titulo,
      descricao,
      prioridade,
      dataEntrega
    });

    res.redirect("/tarefas");
  }

  static async editar(req, res) {
    const usuarioId = req.session.usuario.id;
    const { id } = req.params;

    const tarefa = await Tarefa.findById(id, usuarioId);
    const disciplinas = await Disciplina.findAllByUser(usuarioId);

    res.render("tarefas/editar", { tarefa, disciplinas });
  }

  static async atualizar(req, res) {
    const usuarioId = req.session.usuario.id;
    const { id } = req.params;

    const { disciplinaId, titulo, descricao, status, prioridade, dataEntrega } = req.body;

    await Tarefa.update(id, usuarioId, {
      disciplinaId,
      titulo,
      descricao,
      status,
      prioridade,
      dataEntrega
    });

    res.redirect("/tarefas");
  }

  static async excluir(req, res) {
    const usuarioId = req.session.usuario.id;
    const { id } = req.params;

    await Tarefa.delete(id, usuarioId);

    res.redirect("/tarefas");
  }

  static async concluir(req, res) {
    const usuarioId = req.session.usuario.id;
    const { id } = req.params;

    await Tarefa.concluir(id, usuarioId);

    res.redirect("/tarefas");
  }
}

module.exports = TarefaController;