import cors from "cors";
import path from "path";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import express, { json } from "express";
import routes from "./src/virtusbank/routes/index.js"
import { connectToDatabase } from "./src/virtusbank/config/database.js";
import globalErrors from "./src/virtusbank/middlewares/globalErrors.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/virtusbank/views"));

app.use(cors());
app.use(json());
app.use(routes);
app.use(globalErrors);

const startServer = async () => {
  try {
    await connectToDatabase();

    const port = process.env.PORT;
    const host = process.env.HOST;
    app.listen(port, host, () => {
      console.log(`Servidor rodando em ${host}:${port}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
};

startServer();
