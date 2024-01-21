import { Request, Response, Router } from 'express';
import { loginController } from '../useCases/Login';

const loginRouter = Router();

loginRouter.post('/', (request: Request, response: Response) => {
  return loginController.handle(request, response);
});

export { loginRouter };
