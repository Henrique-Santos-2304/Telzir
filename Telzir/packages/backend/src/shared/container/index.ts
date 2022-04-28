import { container, delay } from 'tsyringe';
import { IUserDataRepository } from '../../data/protocols/repository/user-queries';
import { UserData } from '../../data/repositories/user/users-data';

container.registerSingleton<IUserDataRepository>(
  'UsersRepository',
  delay(() => UserData)
);
