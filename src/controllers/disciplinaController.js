const Disciplina = require("../models/Disciplina");

class DisciplinaController {
  static async listar(req, res) {
    const usuarioId = req.session.usuario.id;
    const disciplinas = await Disciplina.findAllByUser(usuarioId);

    res.render("disciplinas/index", { disciplinas });
  }

  static nova(req, res) {
    res.render("disciplinas/nova");
  }

  static async criar(req, res) {
    const usuarioId = req.session.usuario.id;
    const { nome, descricao } = req.body;

    await Disciplina.create(usuarioId, nome, descricao);

    req.session.mensagemSucesso = "Disciplina criada com sucesso!";

    res.redirect("/disciplinas");
  }

  static async editar(req, res) {
    const usuarioId = req.session.usuario.id;
    const { id } = req.params;

    const disciplina = await Disciplina.findById(id, usuarioId);

    res.render("disciplinas/editar", { disciplina });
  }

  static async atualizar(req, res) {
    const usuarioId = req.session.usuario.id;
    const { id } = req.params;
    const { nome, descricao } = req.body;

    await Disciplina.update(id, usuarioId, nome, descricao);

    req.session.mensagemSucesso = "Disciplina atualizada com sucesso!";

    res.redirect("/disciplinas");
  }

  static async excluir(req, res) {
    const usuarioId = req.session.usuario.id;
    const { id } = req.params;

    await Disciplina.delete(id, usuarioId);

    req.session.mensagemSucesso = "Disciplina excluída com sucesso!";

    res.redirect("/disciplinas");
  }
}

module.exports = DisciplinaController;