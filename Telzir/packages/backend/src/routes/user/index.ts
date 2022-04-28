import { Router } from 'express';
import { addUserService } from '../../presentation/users/add-user/add-user';
import { getUserService } from '../../presentation/users/get-users/get-user';

const routerUsers = Router();

routerUsers.get('/:user_name/:password', getUserService.handle);
routerUsers.post('/addUser', addUserService.handle);

export { routerUsers };
