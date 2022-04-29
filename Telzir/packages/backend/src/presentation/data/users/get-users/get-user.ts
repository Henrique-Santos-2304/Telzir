import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { GetUserUseCase } from '../../../../domain/useCases/users/get-user';
import { InternalServerError } from '../../../helpers/internal-error-log';
import { IHandleRequests } from '../../../protocols/handle-requests';

class GetUserService implements IHandleRequests {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { user_name, password } = req.params;

      const getUserUseCase = container.resolve(GetUserUseCase);
      const user = await getUserUseCase.apply(user_name, password);

      if (user instanceof Error) {
        res.status(500).send(user.message);
      } else res.status(200).send(user);
    } catch (err) {
      InternalServerError(GetUserService.name, err, res);
    }
  }
}

export const getUserService = new GetUserService();
