import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import setup from "../../database/liteDatabase.js";
import taskRoutes from "../../routes/taskRoutes.js";
import { swaggerUi, swaggerDocs } from "../../utils/swagger.js";
import { expect } from "chai";

const app = express();
const PORT = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
setup();
app.use(bodyParser.json());
app.use("/tasks", taskRoutes);

describe("CRUD Tasks API Integration Tests", function () {
  let server;
  let createdTaskId;

  before((done) => {
    server = app.listen(PORT, () => {
      console.log(`Servidor de testes rodando na porta ${PORT}`);
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  beforeEach(async () => {
    // Cria uma nova tarefa de teste e armazena o ID
    const response = await request(server).post("/tasks").send({
      task: "Tarefa de Teste",
      description: "Descrição da tarefa de teste",
    });
    createdTaskId = response.body.id; // Supondo que a tarefa retornada tem um ID no corpo da resposta
  });

  afterEach(async () => {
    // Opcional: Limpar o banco de dados após cada teste, se necessário
    // await clearDatabase(); // Implemente esta função se necessário
  });

  describe("GET /tasks", function () {
    it("should return all tasks", async function () {
      const response = await request(server).get("/tasks");
      expect(response.status).to.equal(200);
    });
  });

  describe("GET /tasks/:id", function () {
    it("should return a specific task", async function () {
      const response = await request(server).get(`/tasks/${createdTaskId}`);
      expect(response.status).to.equal(200);
      // Verifique se a resposta contém os dados corretos
      expect(response.body.task).to.equal("Tarefa de Teste");
    });
  });

  describe("POST /tasks", function () {
    it("should create a new task", async function () {
      const newTask = {
        task: "Nova tarefa",
        description: "Descrição da nova tarefa",
      };

      const response = await request(server).post("/tasks").send(newTask);
      expect(response.status).to.equal(201);
    });
  });

  describe("PUT /tasks/:id", function () {
    it("should update a task", async function () {
      const updatedTask = {
        task: "Tarefa atualizada",
        description: "Descrição atualizada",
      };

      const response = await request(server)
        .put(`/tasks/${createdTaskId}`)
        .send(updatedTask);
      expect(response.status).to.equal(200);
    });
  });

  describe("DELETE /tasks/:id", function () {
    it("should delete a task", async function () {
      const response = await request(server).delete(`/tasks/${createdTaskId}`);
      expect(response.status).to.equal(204);
    });
  });
});
