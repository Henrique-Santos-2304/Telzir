import { injectable } from 'tsyringe';
import { UserModel } from '../../../data/models/user/user-model';
import {
  IGetUser,
  UserDataReturn
} from '../../models/user/get-user-data/get-user-data';

@injectable()
class GetUserUseCase implements IGetUser {
  private userList: UserModel[];

  constructor() {
    this.userList = [
      {
        user_id: 'henrique',
        name: 'Henrique',
        password: '1234',
        age: 30,
        telephone: '11-96636-5190'
      }
    ];
  }

  async apply(user_id: string): Promise<UserDataReturn | string> {
    try {
      const userSelected = this.userList.find(
        (user) => user.user_id === user_id
      );
      if (!userSelected) {
        return 'User does not  found';
      } else {
        const { password, ...userWithoutPassword } = userSelected;
        return userWithoutPassword;
      }
    } catch (err) {
      console.log(`Error ocurred in ${GetUserUseCase.name}`);
      console.log(err);
      return '';
    }
  }
}

export { GetUserUseCase };
