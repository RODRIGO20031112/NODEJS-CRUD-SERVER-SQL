// server.js
import express from "express";
import bodyParser from "body-parser";
import setup from "./src/database/liteDatabase.js";
import taskRoutes from "./src/routes/taskRoutes.js";
import logger from "./src/middlewares/logs/logger.js";
import { swaggerUi, swaggerDocs } from "./src/utils/swagger.js";

const app = express();
const PORT = 3000;

// Rota para servir a documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Cria o banco SQL Lite
setup();

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());

// Middleware de logging
app.use(logger);

// Rotas
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
