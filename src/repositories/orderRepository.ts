import { injectable } from 'tsyringe';
import { Order, ProductCart } from '../models';

@injectable()
export class OrderRepository {
    async findAll() {
        return await Order.findAll({include: ProductCart});
    }

    async findByUserId(userId: number) {
        return await Order.findOne({ where: { userId } });
    }

    async create(order: Partial<Order>) {
        return await Order.create(order);
    }

    async update(order: Partial<Order>, id: number) {
        return await Order.update(order, {
            where: { id: id }
        });
    }

    async delete(id: number) {
        return await Order.destroy({ where: { id: id } });
    }
}