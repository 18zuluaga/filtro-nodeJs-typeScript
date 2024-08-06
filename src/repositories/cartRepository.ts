import { injectable } from 'tsyringe';
import { Cart } from '../models';

@injectable()
export class CartRepository {
    async create(cart: Partial<Cart>) {
        return await Cart.create(cart);
    }

}