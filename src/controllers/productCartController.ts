import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ProductCartService } from '../services/productCartService';

export class ProductCartController {
    static async create(req: Request, res: Response) {
        try {
            const { productId, cartId, quantity } = req.body;
            if (!productId || !cartId || !quantity) {
                res.status(400).json({ message: "Product, cart and quantity are required"});
            }
            const productCartService = container.resolve(ProductCartService);
            const orders = await productCartService.createProductCart(req.body);
            res.json({status: 201, message: "Product cart created successfully", data:orders});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async Update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { productId, cartId, quantity } = req.body;
            if ( !id || (!productId && !cartId && !quantity)) {
                res.status(400).json({ message: "Product, cart and quantity are required"});
            }
            const productCartService = container.resolve(ProductCartService);
            const orders = await productCartService.updateProductCart(req.body, parseInt(id));
            res.json({ status: 200, message: "Product cart updated successfully",data: orders});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "Id is required"});
            }
            const productCartService = container.resolve(ProductCartService);
            const orders = await productCartService.deleteProductCart(parseInt(id));
            res.json({ status: 200, message: "Product cart deleted successfully",data: orders});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }
}