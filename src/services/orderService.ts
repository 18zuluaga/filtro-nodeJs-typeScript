import { injectable, inject } from 'tsyringe';
import {OrderRepository} from '../repositories';
import { Order } from '../models';

@injectable()
export class OrderService {
    constructor(
        @inject(OrderRepository) private OrderRepository: OrderRepository
    ) {}

    async getAllOrders() {
        return await this.OrderRepository.findAll();
    }

    async createOrder(order: Partial<Order>) {
        return await this.OrderRepository.create(order);
    }

    async updateOrder(order: Partial<Order>, id: number) {
        return await this.OrderRepository.update(order, id);
    }

    async getOrderByUserId(UserId: number) {
        return await this.OrderRepository.findByUserId(UserId);
    }

    async deleteOrder(id: number) {
        return await this.OrderRepository.delete(id);
    }
}