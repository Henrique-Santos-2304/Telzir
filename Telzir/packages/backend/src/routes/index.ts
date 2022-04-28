import { Router } from 'express';
import { routerUsers } from './user';

const router = Router();

router.use('/users', routerUsers);

export { router };
