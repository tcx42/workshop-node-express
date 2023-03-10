import { Router } from 'express';
import { login, signIn } from '../controllers/account.controller.js';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/users.controller.js';
import { authenticateAdmin, authenticateUser } from '../middleware/auth.js';

const routes = Router();

routes.post('/signin', signIn);
routes.post('/login', login);
routes.get('/users', authenticateAdmin, getAllUsers);
routes.get('/users/:id', authenticateUser, getUserById);
routes.put('/users/:id', authenticateUser, updateUser);
routes.delete('/users/:id', authenticateUser, deleteUser);

export default routes;
