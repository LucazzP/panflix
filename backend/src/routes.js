import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/register', UserController.store);
routes.post('/login', SessionController.store);

routes.use(AuthMiddleware);

routes.put('/users', UserController.update);

export default routes;
