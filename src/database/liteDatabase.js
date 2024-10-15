import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do Sequelize
let sequelize;
const SQL_PREFERENCE = process.env.SQL_PREFERENCE;

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

if (SQL_PREFERENCE === "SQL_LITE") {
  // Usar SQLite
  console.log("SQL Lite em uso");
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./src/database/database.sqlite",
  });
} else if (SQL_PREFERENCE === "MY_SQL") {
  // Usar MySQL
  console.log("MYSQL em uso");
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
  });
}

// Definição do modelo Tasks
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

// Função para configurar o banco de dados
export const setup = async () => {
  try {
    // Sincroniza o modelo com o banco de dados, criando a tabela se não existir
    await sequelize.sync();
    console.log("Banco de dados e tabela 'Tasks' criados com sucesso!");
  } catch (error) {
    console.error("Erro ao configurar o banco de dados:", error);
  }
};

export default setup;
