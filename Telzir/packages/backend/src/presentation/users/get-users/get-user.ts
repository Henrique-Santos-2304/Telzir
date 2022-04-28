import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { GetUserUseCase } from '../../../domain/useCases/users/get-user';
import { IHandleRequests } from '../../protocols/handle-requests';

class GetUserService implements IHandleRequests {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { user_id } = req.params;
    try {
      const getUserUseCase = container.resolve(GetUserUseCase);
      const user = await getUserUseCase.apply(user_id);
      res.status(200).send(user);
    } catch (err) {
      console.log(`[ERROR] Error is ocurred in ${GetUserService.name} `);
      console.log(err);
      res.status(500).send('INTERNAL SERVER ERROR');
      next();
    }
  }
}

const getUserService = new GetUserService();
export { GetUserService, getUserService };
