const express = require("express");
const TarefaController = require("../controllers/tarefaController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/tarefas", authMiddleware, TarefaController.listar);
router.get("/tarefas/nova", authMiddleware, TarefaController.nova);
router.post("/tarefas", authMiddleware, TarefaController.criar);

router.get("/tarefas/editar/:id", authMiddleware, TarefaController.editar);
router.post("/tarefas/editar/:id", authMiddleware, TarefaController.atualizar);

router.post("/tarefas/excluir/:id", authMiddleware, TarefaController.excluir);
router.post("/tarefas/concluir/:id", authMiddleware, TarefaController.concluir);

module.exports = router;