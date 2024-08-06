import { injectable } from 'tsyringe';
import { User } from '../models';

@injectable()
export class UserRepository {
    async findAll() {
        return await User.findAll();
    }

    async create(user: Partial<User>) {
        return await User.create(user);
    }

    async findByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    async update(user: Partial<User>, id: number) {
        await User.update(user, { where: { id: id } });
    }

    async delete(id: number) {
        await User.destroy({ where: { id: id } });
    }
}
