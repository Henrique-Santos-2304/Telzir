import { Response } from 'express';

const InternalServerError = (
  className: string,
  err: unknown,
  res: Response
) => {
  const { message } = err as Error;
  console.log(`[ERROR] Error is ocurred in ${className} `);
  console.log(err);
  res.status(500).send({ value: 'INTERNAL SERVER ERROR', message });
};

export { InternalServerError };
