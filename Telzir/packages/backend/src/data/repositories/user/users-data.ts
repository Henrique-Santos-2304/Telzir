import { AddUser } from '../../../domain/models/user/add-user/add-user';
import { UserModel } from '../../models/user/user-model';
import { v4 as uuid } from 'uuid';
import { IUserDataRepository } from '../../protocols/repository/user-queries';

class UserData implements IUserDataRepository {
  private users: UserModel[];

  constructor() {
    this.users = [];
  }

  async add(user: AddUser): Promise<number> {
    return this.users.push({ ...user, user_id: uuid() });
  }

  async getOne(user_id: string): Promise<UserModel | undefined> {
    const user = this.users.find((usr) => usr.user_id === user_id);
    return user;
  }
}

const userData = new UserData();
export { userData };
