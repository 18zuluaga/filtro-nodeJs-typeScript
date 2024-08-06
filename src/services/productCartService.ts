import { injectable, inject } from 'tsyringe';
import { ProductCartRepository } from '../repositories';
import { ProductCart } from '../models';

@injectable()
export class ProductCartService {
    constructor(
        @inject(ProductCartRepository) private ProductCartRepository: ProductCartRepository
    ) {}

    async createProductCart(productCart: Partial<ProductCart>) {
        return await this.ProductCartRepository.create(productCart);
    }

    async updateProductCart(productCart: Partial<ProductCart>, id: number) {
        return await this.ProductCartRepository.update(productCart, id);
    }

    async deleteProductCart(id: number) {
        return await this.ProductCartRepository.delete(id);
    }
}