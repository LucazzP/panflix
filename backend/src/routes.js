import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ConfirmationController from './app/controllers/ConfirmationController';
import MovieController from './app/controllers/MovieController'

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

// rotas de registro e login
routes.get('/', (req, res) =>  res.json({hello: 'World'}));
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/confirmation/:token', ConfirmationController.update);
routes.get('/movies', MovieController.all);

routes.use(AuthMiddleware);

// rota de update de informacoes
routes.put('/users', UserController.update);
routes.post('/users/buy', UserController.buySubscription);

routes.post('/movies', MovieController.store);
routes.put('/movies', MovieController.put);
routes.delete('/movies/:movie_id', MovieController.delete);
routes.get('/movies/:movie_id', MovieController.index);

export default routes;
