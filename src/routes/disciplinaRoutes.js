const express = require("express");
const DisciplinaController = require("../controllers/disciplinaController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/disciplinas", authMiddleware, DisciplinaController.listar);
router.get("/disciplinas/nova", authMiddleware, DisciplinaController.nova);
router.post("/disciplinas", authMiddleware, DisciplinaController.criar);

router.get("/disciplinas/editar/:id", authMiddleware, DisciplinaController.editar);
router.post("/disciplinas/editar/:id", authMiddleware, DisciplinaController.atualizar);

router.post("/disciplinas/excluir/:id", authMiddleware, DisciplinaController.excluir);

module.exports = router;