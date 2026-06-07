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
        return res.send("E-mail já cadastrado.");
      }

      const senhaHash = await bcrypt.hash(senha, 10);

      await User.create(nome, email, senhaHash);

      res.redirect("/login");
    } catch (erro) {
      console.error(erro);
      res.send("Erro ao cadastrar usuário.");
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
        return res.send("Usuário não encontrado.");
      }

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.send("Senha incorreta.");
      }

      req.session.usuario = {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      };

      res.redirect("/dashboard");
    } catch (erro) {
      console.error(erro);
      res.send("Erro ao fazer login.");
    }
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  }
}

module.exports = AuthController;