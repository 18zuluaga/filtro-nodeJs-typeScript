import { injectable, inject } from 'tsyringe';
import {PermissionsRepository} from '../repositories/';

@injectable()
export class PermissionsService {
    constructor(
        @inject(PermissionsRepository) private PermissionsRepository: PermissionsRepository
    ) {}

    async getPermissionsByRolIdAndEntityId(roleId: number, EntityId: number) {
        return await this.PermissionsRepository.findByRolIdAndEntityId(roleId, EntityId);
    }
}