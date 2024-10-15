import { Tasks } from "../database/liteDatabase.js"; // Certifique-se de que Tasks está definido corretamente

// Obtém todas os itens
export const getAllTasks = async () => {
  const tasks = await Tasks.findAll(); // Usa findAll do Sequelize
  return tasks; // Retorna todas os itens encontrados
};

// Obtém uma task pelo ID
export const getTaskById = async (id) => {
  const task = await Tasks.findByPk(id); // Usa findByPk para encontrar pelo ID
  return task; // Retorna o task encontrado ou null se não existir
};

// Adiciona uma nova task
export const addTask = async (data) => {
  const task = await Tasks.create({
    task: data.task,
    status: false,
    description: data.description, // Supondo que "description" está vindo de data
  });

  return task; // Retorna a task criada
};

// Atualiza uma task existente
export const updateTask = async (id, data) => {
  const task = await getTaskById(id); // Obtém o task pelo ID
  if (task) {
    await task.update({
      // Usa o método update do Sequelize
      task: data.task, // Atualiza os campos necessários
      status: false,
      description: data.description,
    });
    return task; // Retorna o task atualizado
  }
  return null; // Retorna null se o task não for encontrado
};

// Deleta uma task pelo ID
export const deleteTask = async (id) => {
  const task = await getTaskById(id); // Obtém o task pelo ID
  if (task) {
    await task.destroy(); // Usa o método destroy do Sequelize para remover o task
    return true; // Retorna true se o task foi deletado
  }
  return false; // Retorna false se o task não for encontrado
};

// Atualiza uma task existente
export const updateStatusTask = async (id, data) => {
  const task = await getTaskById(id); // Obtém o task pelo ID
  if (task) {
    await task.update({
      // Usa o método update do Sequelize
      status: data.status,
    });
    return task; // Retorna o task atualizado
  }
  return null; // Retorna null se o task não for encontrado
};

// Obtém todas as tarefas e calcula métricas
export const getAllTaskMetrics = async () => {
  const tasks = await Tasks.findAll();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === true).length;
  const incompleteTasks = totalTasks - completedTasks;

  // Cálculo das porcentagens
  const completedPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const incompletePercentage =
    totalTasks > 0 ? (incompleteTasks / totalTasks) * 100 : 0;

  // Formata a mensagem de retorno
  const message = `Você completou ${completedPercentage.toFixed(
    2
  )}% das tarefas e ainda precisa concluir os outros ${incompletePercentage.toFixed(
    2
  )}%.`;

  return {
    totalTasks,
    completedTasks,
    incompleteTasks,
    message,
  };
};
