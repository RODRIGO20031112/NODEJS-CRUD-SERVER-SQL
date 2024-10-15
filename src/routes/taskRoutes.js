// src/routes/taskRoutes.js
import { Router } from "express";
import * as taskController from "../controllers/taskController.js";

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     tags: [Tasks]
 *     summary: Obtém todas os tasks.
 *     responses:
 *       200:
 *         description: Lista de tasks.
 */
router.get("/", taskController.getTasks); // GET /tasks

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     tags: [Tasks]
 *     summary: Obtém uma task específico.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do task a ser obtido.
 *     responses:
 *       200:
 *         description: Detalhes do task.
 *       404:
 *         description: Task não encontrado.
 */
router.get("/:id", taskController.getTask); // GET /tasks/:id

/**
 * @swagger
 * /tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: Cria uma nova task.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *                 example: Entregar relatório
 *               description:
 *                 type: string
 *                 example: "Entregar relatório as 10:30 da manhã"
 *     responses:
 *       201:
 *         description: Task criado com sucesso.
 */
router.post("/", taskController.createTask); // POST /tasks

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     tags: [Tasks]
 *     summary: Atualiza uma task existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do task a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *                 example: Entregar relatório
 *               description:
 *                 type: string
 *                 example: "Relatório entregue as 10:30"
 *     responses:
 *       200:
 *         description: Task atualizado com sucesso.
 *       404:
 *         description: Task não encontrado.
 */
router.put("/:id", taskController.updateTask); // PUT /tasks/:id

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     tags: [Tasks]
 *     summary: Remove uma task existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do task a ser removido.
 *     responses:
 *       200:
 *         description: Task removido com sucesso.
 *       404:
 *         description: Task não encontrado.
 */
router.delete("/:id", taskController.deleteTask); // DELETE /tasks/:id

/**
 * @swagger
 * /tasks/{id}/complete:
 *   patch:
 *     tags: [Tasks]
 *     summary: Atualiza uma task existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do task a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Task concluída com sucesso.
 *       404:
 *         description: Task não encontrado.
 */
router.patch("/:id/complete", taskController.updateStatusTask); // PUT /tasks/:id

export default router;
