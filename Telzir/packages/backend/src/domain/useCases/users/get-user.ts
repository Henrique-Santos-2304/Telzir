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
      const userSelected = await this.usersRepository.getOne(user_name);

      if (!userSelected) return new Error('User Does Not Found');
      else {
        if (userSelected.password === password_user) {
          const { password, ...userWithoutPassword } = userSelected;
          return userWithoutPassword;
        } else return new Error('Invalid Credentials');
      }
    } catch (err) {
      return ServiceErrorData(GetUserUseCase.name, err as Error);
    }
  }
}

export { GetUserUseCase };
