import { injectable } from 'tsyringe';
import { Product } from '../models';

@injectable()
export class ProductRepository {
    async findAll() {
        return await Product.findAll();
    }

    async findById(id: number) {
        return await Product.findByPk(id);
    }

    async update(user: Partial<Product>, id: number) {
        await Product.update(user, { where: { id: id } });
    }

    async delete(id: number) {
        await Product.destroy({ where: { id: id } });
    }

    async create(product: Product) {
        return await Product.create(product);
    }
}
