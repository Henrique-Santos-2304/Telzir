import { AssertionError } from 'assert';
import { inject, injectable } from 'tsyringe';
import { UserModel } from '../../../data/models/user/user-model';
import { IUserDataRepository } from '../../../data/protocols/repository/user-queries';
import {
  IGetUser,
  UserDataReturn
} from '../../models/user/get-user-data/get-user-data';

@injectable()
class GetUserUseCase implements IGetUser {
  constructor(
    @inject('UsersRepository') private usersRepository: IUserDataRepository
  ) {}
  async apply(
    user_name: string,
    password_user: string
  ): Promise<UserDataReturn | Error> {
    try {
      console.log(user_name);
      const userSelected = await this.usersRepository.getOne(user_name);
      if (!userSelected) {
        return new Error('User Does Not Found');
      } else {
        console.log(`${userSelected.password},   ${password_user}`);

        if (userSelected.password === password_user) {
          const { password, ...userWithoutPassword } = userSelected;
          return userWithoutPassword;
        } else {
          return new Error('Invalid Credentials');
        }
      }
    } catch (err) {
      const { message } = err as Error;
      console.log(`Error ocurred in ${GetUserUseCase.name}`);
      console.log(err);
      return new Error(message);
    }
  }
}

export { GetUserUseCase };
