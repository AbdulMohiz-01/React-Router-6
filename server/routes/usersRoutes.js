import { Router } from 'express';
import { getUserById, getUsers } from '../controller/userController.js';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);

export { router };