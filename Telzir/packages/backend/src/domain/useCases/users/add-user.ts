import { injectable } from 'tsyringe';
import { userData } from '../../../data/repositories/user/users-data';
import { AddUser, IAddUser } from '../../models/user/add-user/add-user';

@injectable()
class AddUserUseCase implements IAddUser {
  async apply({ name, password, telephone, age }: AddUser): Promise<boolean> {
    try {
      if (name && telephone && password && age) {
        userData.add({ name, password, age, telephone });
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
