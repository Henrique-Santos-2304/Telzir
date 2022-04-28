import { Router } from 'express';
import { getUserService } from '../../presentation/users/get-users/get-user';

const routerUsers = Router();

routerUsers.get('/', getUserService.handle);

export { routerUsers };
