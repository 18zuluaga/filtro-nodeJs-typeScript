
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {ProductService} from '../services/productService';

export class ProductController {
    static async getAllProducts(_: Request, res: Response) {
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getAllProducts();
            if (products.length === 0) {
                res.status(404).json({ message: "No products found"});
            }
            res.json({ status: 200,menssage: "Products fetched successfully", data: products});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async getProductById(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.getProductById(parseInt(req.params.id));
        if (!product) {
            res.status(404).json({ message: "Product not found"});
        }
        res.json({ status: 200,menssage: "Product fetched successfully", data: product});
    }

    static async createProduct(req: Request, res: Response) {
        try {
            const { name, description, price, stock } = req.body;
            if (!name || !description || !price || !stock) {
                res.status(400).json({menssage:"Name, description, price and stock are required"});
            }
            const productService = container.resolve(ProductService);
            const product = await productService.createProduct(req.body);
            res.status(201).json({ status: 201, message: "Product created successfully", data: product });
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, description, price, stock } = req.body;
            if (!id || (!name && !description && !price && !stock)) {
                res.status(400).json({ message: "Name, description, price and stock are required"});
            }
            const productService = container.resolve(ProductService);
            const product = await productService.updateProduct(req.body, parseInt(req.params.id));
            res.status(201).json({status: 201, message: "Product updated successfully", data: product});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "Id is required"});
            }
            const productService = container.resolve(ProductService);
            const product = await productService.deleteProduct(parseInt(req.params.id));
            res.status(201).json({status: 201, message: "Product deleted successfully", data: product});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }
}
