import { injectable, inject } from 'tsyringe';
import { CartRepository } from '../repositories/';

@injectable()
export class CartService {
    constructor(
        @inject(CartRepository) private CartRepository: CartRepository
    ) {}

    async createCart(userId: number) {
        return await this.CartRepository.create({ userId });
    }
}