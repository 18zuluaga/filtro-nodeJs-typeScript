import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { OrderService } from '../services/orderService';

export class OrderController {
    static async getAllOrders(_: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getAllOrders();
            if (orders.length === 0) {
                res.status(404).json({ message: "No orders found"});
            }
            res.json({ status: 200, message: "Orders fetched successfully",orders: orders});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async getOrderByUserId(req: Request, res: Response) {
        try {
            if (!req.params.id) {
                res.status(404).json({ message: "Id is required"});
            }
            const orderService = container.resolve(OrderService);
            const order = await orderService.getOrderByUserId(parseInt(req.params.id));
            if (!order) {
                res.status(404).json({ message: "Order not found"});
            }
            res.json({status: 200 ,message: "Order fetched successfully",data: order});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async createOrder(req: Request, res: Response) {
        try {

            const { userId, productCartId, total } = req.body;
            if (!userId || !productCartId || !total) {
                res.status(400).json({ message: "userId, productCartId and total are required"});
            }
            const orderService = container.resolve(OrderService);
            const order = await orderService.createOrder(req.body);
            res.status(201).json({status: 201, message: "Order created successfully", data: order});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async updateOrder(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { userId, productCartId, total } = req.body;
            if (!id || (!userId && !productCartId && !total)) {
                res.status(400).json({ message: "userId and productCartId and total are required"});
            }
            const orderService = container.resolve(OrderService);
            const order = await orderService.updateOrder(req.body, parseInt(req.params.id));
            res.status(201).json({status: 201, message: "Order updated successfully", data: order});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }

    static async deleteOrder(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "userId required"});
            }
            const orderService = container.resolve(OrderService);
            const order = await orderService.deleteOrder(parseInt(req.params.id));
            res.status(201).json({status: 201, message: "Order deleted successfully", data: order});
        } catch (err) {
            res.status(500).json({ message: err});
        }
    }
}