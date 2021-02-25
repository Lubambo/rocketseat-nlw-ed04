import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

// Controladores
const userController = new UserController();

// Rotas
router.post("/users", userController.create);

export { router };