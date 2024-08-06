import { injectable, inject } from 'tsyringe';
import {ProductRepository} from '../repositories';
import { Product } from '../models';

@injectable()
export class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number) {
        return await this.productRepository.findById(id);
    }

    async createProduct(product: Product) {
        return await this.productRepository.create(product);
    }

    async updateProduct(product: Partial<Product>, id: number) {
        return await this.productRepository.update(product, id);
    }

    async deleteProduct(id: number) {
        return await this.productRepository.delete(id);
    }
}
