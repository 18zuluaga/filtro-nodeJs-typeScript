import { Router } from 'express';
import {ProductController} from '../controllers/productController';

export const productRouter = Router();

productRouter.post('/', ProductController.createProduct);
productRouter.get('/', ProductController.getAllProducts);
productRouter.get('/:id', ProductController.getProductById);
productRouter.put('/:id', ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProduct);
