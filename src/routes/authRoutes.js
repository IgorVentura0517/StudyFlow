const express = require("express");
const AuthController = require("../controllers/authController");

const router = express.Router();

router.get("/cadastro", AuthController.showCadastro);
router.post("/cadastro", AuthController.cadastrar);

router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login);

router.post("/logout", AuthController.logout);

module.exports = router;