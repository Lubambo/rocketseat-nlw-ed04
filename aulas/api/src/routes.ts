import { Router } from 'express';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

/* Controladores */
const userController = new UserController();        // Controller de usuários
const surveyController = new SurveyController();    // Controller de pesquisas

/* Rotas */
/* Rotas de Usuários */
router.post("/users", userController.create);       // Criar novo usuário

/* Rotas de Pesquisas */
router.post("/surveys", surveyController.create);   // Criar nova pesquisa
router.get("/surveys", surveyController.show);      // Lista todas as pesquisas

export { router };