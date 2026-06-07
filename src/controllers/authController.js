const bcrypt = require("bcryptjs");
const User = require("../models/User");

class AuthController {

  static showCadastro(req, res) {
    res.render("cadastro");
  }

  static async cadastrar(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const usuarioExiste = await User.findByEmail(email);

      if (usuarioExiste) {
        req.session.mensagemErro =
          "Este e-mail já está cadastrado.";

        return res.redirect("/cadastro");
      }

      const senhaHash = await bcrypt.hash(senha, 10);

      await User.create(
        nome,
        email,
        senhaHash
      );

      req.session.mensagemSucesso =
        "Cadastro realizado com sucesso! Faça login para continuar.";

      return res.redirect("/login");

    } catch (erro) {

      console.error(erro);

      req.session.mensagemErro =
        "Erro ao cadastrar usuário.";

      return res.redirect("/cadastro");
    }
  }

  static showLogin(req, res) {
    res.render("login");
  }

  static async login(req, res) {
    try {

      const { email, senha } = req.body;

      const usuario = await User.findByEmail(email);

      if (!usuario) {

        req.session.mensagemErro =
          "E-mail ou senha incorretos.";

        return res.redirect("/login");
      }

      const senhaCorreta =
        await bcrypt.compare(
          senha,
          usuario.senha
        );

      if (!senhaCorreta) {

        req.session.mensagemErro =
          "E-mail ou senha incorretos.";

        return res.redirect("/login");
      }

      req.session.usuario = {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      };

      return res.redirect("/dashboard");

    } catch (erro) {

      console.error(erro);

      req.session.mensagemErro =
        "Erro ao fazer login.";

      return res.redirect("/login");
    }
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  }
}

module.exports = AuthController;