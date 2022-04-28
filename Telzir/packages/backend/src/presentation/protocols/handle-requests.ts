import { NextFunction, Request, Response } from 'express';

interface IHandleRequests {
  handle(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export { IHandleRequests };
