import { Router } from 'express';
import {OrderController} from '../controllers/orderController';

export const ordersRouter = Router();

ordersRouter.get('/', OrderController.getAllOrders);
ordersRouter.get('/:id', OrderController.getOrderByUserId);
ordersRouter.post('/', OrderController.createOrder);
ordersRouter.put('/:id', OrderController.updateOrder);