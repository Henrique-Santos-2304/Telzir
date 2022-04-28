import { injectable } from 'tsyringe';
import { UserModel } from '../../../data/models/user/user-model';
import { IGetUser } from '../../protocols/users/get-user';

@injectable()
class GetUserUseCase implements IGetUser {
  private userList: UserModel[];

  constructor() {
    this.userList = [
      {
        user_id: 'henrique',
        name: 'Henrique',
        password: '1234',
        age: 30
      }
    ];
  }

  async apply(user_id: string): Promise<any> {
    try {
      const userSelected = this.userList.find(
        (user) => user.user_id === user_id
      );
      return userSelected || 'User does not  found';
    } catch (err) {
      console.log(`Error ocurred in ${GetUserUseCase.name}`);
      console.log(err);
      return err;
    }
  }
}

export { GetUserUseCase };
