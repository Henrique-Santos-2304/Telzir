import { injectable } from 'tsyringe';
import { IGetUser } from '../../protocols/users/get-user';

@injectable()
class GetUserUseCase implements IGetUser {
  private userList: any[];

  constructor() {
    this.userList = [];
  }
  async apply(user_id: string): Promise<any> {
    try {
      const userSelected = this.userList.find(
        (user) => user.user_id === user_id
      );
      return this.userList;
    } catch (err) {
      console.log(`Error ocurred in ${GetUserUseCase.name}`);
      console.log(err);
      return err;
    }
  }
}

export { GetUserUseCase };
