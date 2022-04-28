import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { AddUserUseCase } from '../../../domain/useCases/users/add-user';
import { IHandleRequests } from '../../protocols/handle-requests';

class AddUserService implements IHandleRequests {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const addUser = container.resolve(AddUserUseCase);
    const { name, password, telephone, age } = req.body;
    try {
      const isAdd = addUser.apply({ name, password, telephone, age });
      res.status(200).send(isAdd);
    } catch (err) {
      console.log(`Error ocurred in ${AddUserService.name}`);
      console.log(err);
      res.status(500);
      next();
    }
  }
}

const addUserService = new AddUserService();
export { AddUserService, addUserService };
