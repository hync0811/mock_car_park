import { Role } from './role';
export interface User {
    username: string;
    roles_name: Role;
    expiredTime: number;
    token: string;
}