import "reflect-metadata";
import express from 'express';
import { router } from "./routes";
import createConnection from "./database";

createConnection();
const app = express();

app.use(express.json());    // Informa o app que o formato dos dados recebidos no request será JSON
app.use(router);            // Informa o app qual o arquivo de rotas utilizar

export { app };