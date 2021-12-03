import { User } from './user';
import { Role } from './role';
export interface User_role {
    id: string;
    employee_id: User["employee_id"];
    role_id: Role["role_id"];
}