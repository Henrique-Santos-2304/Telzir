import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { IHandleRequests } from '../../protocols/handle-requests';

class GetUserService implements IHandleRequests {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
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
