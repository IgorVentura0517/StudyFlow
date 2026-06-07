const express = require("express");
const path = require("path");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const disciplinaRoutes = require("./routes/disciplinaRoutes");
const tarefaRoutes = require("./routes/tarefaRoutes");
const DashboardController = require("./controllers/dashboardController");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: "studyflow_secret",
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  res.locals.mensagemSucesso = req.session.mensagemSucesso;
  res.locals.mensagemErro = req.session.mensagemErro;

  delete req.session.mensagemSucesso;
  delete req.session.mensagemErro;

  next();
});

app.use(authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/dashboard", authMiddleware, DashboardController.index);

app.use(disciplinaRoutes);
app.use(tarefaRoutes);
app.use(express.static(path.join(__dirname, "../public")));