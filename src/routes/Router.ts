import { Router } from 'express';
import { authRouter, ordersRouter, ProductCartRouter, productRouter, userRouter } from './';
import { verifyToken } from '../Middleware';


const router = Router();
router.use('/users',verifyToken, userRouter);
router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/order',verifyToken, ordersRouter);
router.use('/productCart', ProductCartRouter);

export default router;  
