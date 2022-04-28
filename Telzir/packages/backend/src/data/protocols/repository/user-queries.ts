import { AddUser } from '../../../domain/models/user/add-user/add-user';
import { UserModel } from '../../models/user/user-model';

interface IUserDataRepository {
  add(user: AddUser): Promise<number>;
  getOne(user_id: string): Promise<UserModel | undefined>;
}

export { IUserDataRepository };
