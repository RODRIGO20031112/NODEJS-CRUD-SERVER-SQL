import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/database.sqlite", // Ajuste para o caminho correto do seu banco de dados
});

export const Tasks = sequelize.define("Tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export const setup = async () => {
  try {
    // Sincroniza o modelo com o banco de dados, criando a tabela se não existir
    await sequelize.sync();
  } catch (error) {
    console.error("Erro ao configurar o banco de dados:", error);
  }
};

export default setup;
