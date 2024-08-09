import { injectable, inject } from 'tsyringe';
import { ProductCartRepository } from '../repositories';
import { ProductCart } from '../models';
import { ProductService } from './productService';

@injectable()
export class ProductCartService {
    constructor(
        @inject(ProductCartRepository) private ProductCartRepository: ProductCartRepository,
        @inject(ProductService) private productService: ProductService
    ) {}

    async createProductCart(productCart: Partial<ProductCart>) {
        if (productCart) {
            return('Quantity must be greater than 0');
        }
        const product = await this.productService.getProductById(productCart.productId);
        if (product!.stock < productCart.quantity) {
            return('Insufficient stock');
        }
        const productCartCreated = await this.ProductCartRepository.create(productCart);
        const updatedProduct = await this.productService.updateProduct({stock: product!.stock - productCartCreated.quantity}, product!.id);
        return updatedProduct; 
    }

    async updateProductCart(productCart: Partial<ProductCart>, id: number) {
        
        return await this.ProductCartRepository.update(productCart, id);
    }

    async deleteProductCart(id: number) {
        return await this.ProductCartRepository.delete(id);
    }
}