import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  name: "default",
  type: "postgres",
  host: process.env.HOST_DB,
  port: parseInt(process.env.PORT_DB, 10),
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB,
  schema: process.env.SCHEMA_DB,
  entities: ["./src/virtusbank/models/*.cjs"],
  synchronize: true,
  logging: false,
});

const connectToDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    return AppDataSource
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
};

export {connectToDatabase, AppDataSource}
