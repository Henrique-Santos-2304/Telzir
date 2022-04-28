import { inject, injectable } from 'tsyringe';
import { IUserDataRepository } from '../../../data/protocols/repository/user-queries';
import { AddUser, IAddUser } from '../../models/user/add-user/add-user';

@injectable()
class AddUserUseCase implements IAddUser {
  constructor(
    @inject('UsersRepository') private userRepository: IUserDataRepository
  ) {}

  async apply({
    user_name,
    password,
    telephone,
    age
  }: AddUser): Promise<boolean> {
    try {
      if (user_name && telephone && password && age) {
        await this.userRepository.add({ user_name, password, age, telephone });
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(`Error ocurred in ${AddUserUseCase.name}`);
      console.log(err);
      return false;
    }
  }
}

export { AddUserUseCase };
