import "reflect-metadata";
import express from 'express';
import { router } from "./routes";
import "./database"; // Não precisa especificar o arquivo index.ts pq por padrão quando se tem um arquivo index ele é será importado

const app = express();

app.use(express.json());    // Informa o app que o formato dos dados recebidos no request será JSON
app.use(router);            // Informa o app qual o arquivo de rotas utilizar

// Rodando na porta 3333 (http://localhost:3333/)
// Comando para iniciar o servidor: yarn dev
app.listen(3333, () => console.log("Server is running!"));