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

app.use(authRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando...");
});

app.get("/dashboard", authMiddleware, DashboardController.index);

app.use(disciplinaRoutes);
app.use(tarefaRoutes);