import { inject, injectable } from 'tsyringe';
import { IUserDataRepository } from '../../../data/protocols/repository/user-queries';
import { AddUser, IAddUser } from '../../models/user/add-user/add-user';
import validator from 'validator';
import { encryptedPassword } from '../../util-actions/encrypted-password';
import { ServiceErrorData } from '../../helpers/error-services-data';

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
  }: AddUser): Promise<void | Error> {
    try {
      const isPhone = validator.isMobilePhone(telephone, 'pt-BR');
      if (!isPhone) {
        return new Error("Illegal Aruguments. Its's not telephone valid");
      }

      const userAlreadyExists = await this.userRepository.getOne(user_name);

      if (userAlreadyExists) return new Error('User Already Exists');
      if (user_name && telephone && password && age) {
        const encrypt = await encryptedPassword(password);
        await this.userRepository.add({
          user_name,
          password: encrypt,
          age,
          telephone
        });
      } else return new Error(`Illegal Arguments in ${AddUserUseCase.name}`);
    } catch (err) {
      return ServiceErrorData(AddUserUseCase.name, err as Error);
    }
  }
}

export { AddUserUseCase };
