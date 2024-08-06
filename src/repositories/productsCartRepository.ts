import { injectable } from 'tsyringe';
import { ProductCart } from '../models';

@injectable()
export class ProductCartRepository {
    async create(productCart: Partial<ProductCart>) {
        return await ProductCart.create(productCart);
    }

    async update(productCart: Partial<ProductCart>, id: number) {
        return await ProductCart.update(productCart, { where: { id: id } });
    }

    async delete(id: number) {
        return await ProductCart.destroy({ where: { id: id } });
    }

}