// src/controllers/taskController.js
import * as taskModel from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter tasks", error });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await taskModel.getTaskById(parseInt(req.params.id));
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter task", error });
  }
};

export const createTask = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    const newTask = await taskModel.addTask(data);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar task", error });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskModel.updateTask(
      parseInt(req.params.id),
      req.body
    );
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Task não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar task", error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleted = await taskModel.deleteTask(parseInt(req.params.id));
    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: "Task não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar task", error });
  }
};

export const updateStatusTask = async (req, res) => {
  try {
    const updatedTask = await taskModel.updateStatusTask(
      parseInt(req.params.id),
      req.body
    );
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Task não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar task", error });
  }
};
