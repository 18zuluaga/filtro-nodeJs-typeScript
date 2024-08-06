import { Router } from 'express';
import {UserController} from '../controllers/userController';

export const userRouter = Router();

userRouter.get('/', UserController.getAllUsers);
userRouter.put('/:id', UserController.updateUser)
userRouter.delete('/:id', UserController.deleteUser)