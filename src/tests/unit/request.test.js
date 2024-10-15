import { expect } from "chai";
import sinon from "sinon";
import axios from "axios";

const baseUrl = "http://localhost:3000/tasks";

describe("CRUD Tasks API", function () {
  afterEach(() => {
    sinon.restore(); // Limpa os stubs após cada teste
  });

  describe("GET /tasks", function () {
    it("should return all tasks when the request is successful", async function () {
      const stub = sinon.stub(axios, "get").resolves({
        data: [
          {
            id: 1,
            task: "Entregar relatório",
            description: "Entregar relatório as 10:30 da manhã",
          },
        ],
      });

      const response = await axios.get(baseUrl);
      expect(response.data).to.deep.equal([
        {
          id: 1,
          task: "Entregar relatório",
          description: "Entregar relatório as 10:30 da manhã",
        },
      ]);
      expect(stub.calledOnce).to.be.true;
    });

    it("should throw an error when the request fails", async function () {
      const stub = sinon
        .stub(axios, "get")
        .rejects(new Error("Error fetching tasks"));

      try {
        await axios.get(baseUrl);
      } catch (error) {
        expect(error.message).to.equal("Error fetching tasks");
      }

      expect(stub.calledOnce).to.be.true;
    });
  });

  describe("GET /tasks/:id", function () {
    it("should return a specific task when the request is successful", async function () {
      const taskId = 1;
      const stub = sinon.stub(axios, "get").resolves({
        data: {
          id: taskId,
          task: "Entregar relatório",
          description: "Entregar relatório as 10:30 da manhã",
        },
      });

      const response = await axios.get(`${baseUrl}/${taskId}`);
      expect(response.data).to.deep.equal({
        id: taskId,
        task: "Entregar relatório",
        description: "Entregar relatório as 10:30 da manhã",
      });
      expect(stub.calledOnce).to.be.true;
    });

    it("should throw an error when the request fails", async function () {
      const taskId = 1;
      const stub = sinon
        .stub(axios, "get")
        .rejects(new Error("Error fetching task"));

      try {
        await axios.get(`${baseUrl}/${taskId}`);
      } catch (error) {
        expect(error.message).to.equal("Error fetching task");
      }

      expect(stub.calledOnce).to.be.true;
    });
  });

  describe("POST /tasks", function () {
    it("should create a new task when the request is successful", async function () {
      const newTask = {
        task: "Entregar relatório",
        description: "Entregar relatório as 10:30 da manhã",
      };
      const stub = sinon.stub(axios, "post").resolves({
        data: { id: 1, ...newTask },
      });

      const response = await axios.post(baseUrl, newTask);
      expect(response.data).to.deep.equal({ id: 1, ...newTask });
      expect(stub.calledOnce).to.be.true;
    });

    it("should throw an error when the request fails", async function () {
      const newTask = {
        task: "Entregar relatório",
        description: "Entregar relatório as 10:30 da manhã",
      };
      const stub = sinon
        .stub(axios, "post")
        .rejects(new Error("Error creating task"));

      try {
        await axios.post(baseUrl, newTask);
      } catch (error) {
        expect(error.message).to.equal("Error creating task");
      }

      expect(stub.calledOnce).to.be.true;
    });
  });

  describe("PUT /tasks/:id", function () {
    it("should update a task when the request is successful", async function () {
      const taskId = 1;
      const updatedTask = {
        task: "Entregar relatório",
        description: "Relatório entregue as 10:30",
      };
      const stub = sinon.stub(axios, "put").resolves({
        data: { id: taskId, ...updatedTask },
      });

      const response = await axios.put(`${baseUrl}/${taskId}`, updatedTask);
      expect(response.data).to.deep.equal({ id: taskId, ...updatedTask });
      expect(stub.calledOnce).to.be.true;
    });

    it("should throw an error when the request fails", async function () {
      const taskId = 1;
      const updatedTask = {
        task: "Entregar relatório",
        description: "Relatório entregue as 10:30",
      };
      const stub = sinon
        .stub(axios, "put")
        .rejects(new Error("Error updating task"));

      try {
        await axios.put(`${baseUrl}/${taskId}`, updatedTask);
      } catch (error) {
        expect(error.message).to.equal("Error updating task");
      }

      expect(stub.calledOnce).to.be.true;
    });
  });

  describe("DELETE /tasks/:id", function () {
    it("should delete a task when the request is successful", async function () {
      const taskId = 1;
      const stub = sinon.stub(axios, "delete").resolves({
        data: { message: "Task deleted" },
      });

      const response = await axios.delete(`${baseUrl}/${taskId}`);
      expect(response.data).to.deep.equal({ message: "Task deleted" });
      expect(stub.calledOnce).to.be.true;
    });

    it("should throw an error when the request fails", async function () {
      const taskId = 1;
      const stub = sinon
        .stub(axios, "delete")
        .rejects(new Error("Error deleting task"));

      try {
        await axios.delete(`${baseUrl}/${taskId}`);
      } catch (error) {
        expect(error.message).to.equal("Error deleting task");
      }

      expect(stub.calledOnce).to.be.true;
    });
  });
});
