import { AssertionError } from 'assert';
import { inject, injectable } from 'tsyringe';
import { UserModel } from '../../../data/models/user/user-model';
import { IUserDataRepository } from '../../../data/protocols/repository/user-queries';
import {
  IGetUser,
  UserDataReturn
} from '../../models/user/get-user-data/get-user-data';
import bcrypt from 'bcrypt';
import { ServiceErrorData } from '../../helpers/error-services-data';
import { createJwt } from '../../util-actions/create-token-jwt';

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
      const comparePassword =
        userSelected &&
        (await bcrypt.compare(password_user, userSelected.password));

      if (userSelected && comparePassword) {
        const { user_name, telephone } = userSelected;
        const token = createJwt({ user_name, telephone });
        const { password, ...userWithoutPassword } = userSelected;
        return { ...userWithoutPassword, token };
      } else {
        return new Error('Invalid Credentials');
      }
    } catch (err) {
      return ServiceErrorData(GetUserUseCase.name, err as Error);
    }
  }
}

export { GetUserUseCase };
