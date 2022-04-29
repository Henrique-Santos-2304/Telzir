import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { AddUserUseCase } from '../../../../domain/useCases/users/add-user';
import { InternalServerError } from '../../../helpers/internal-error-log';
import { IHandleRequests } from '../../../protocols/handle-requests';

class AddUserService implements IHandleRequests {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const addUser = container.resolve(AddUserUseCase);
    const { user_name, password, telephone, age } = req.body;
    try {
      const isAdd = await addUser.apply({
        user_name,
        password,
        telephone,
        age
      });

      if (isAdd instanceof Error) res.status(400).send(isAdd.message);
      else res.status(200).send(isAdd);
    } catch (err) {
      InternalServerError(AddUserService.name, err, res);
    }
  }
}

export const addUserService = new AddUserService();
