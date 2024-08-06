import { injectable } from 'tsyringe';
import { Permit} from '../models';

@injectable()
export class PermissionsRepository {
    async findByRolIdAndEntityId(roleId: number, EntityId: number) {
        return await Permit.findOne({ where: { roleId, EntityId } });
    }
}