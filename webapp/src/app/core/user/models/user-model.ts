import { UserResource } from '@bhebb/ngx-clerk';

export interface UserModel extends UserResource {
  userId?: string;
}
