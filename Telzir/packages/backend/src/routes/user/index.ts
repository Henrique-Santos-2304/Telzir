import { Router } from 'express';

const routerUsers = Router();

routerUsers.get('/', (req, res) => {
  const messageWelcome = 'Hii User... Welcome to the Telzier';
  console.log(messageWelcome);
  res.send(messageWelcome);
});

export { routerUsers };
