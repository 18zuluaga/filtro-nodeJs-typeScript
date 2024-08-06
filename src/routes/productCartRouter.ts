import { Router } from 'express';
import {ProductCartController} from '../controllers/productCartController';

export const ProductCartRouter = Router();


ProductCartRouter.post('/', ProductCartController.create);
ProductCartRouter.put('/:id', ProductCartController.Update);
ProductCartRouter.delete('/:id', ProductCartController.delete);
