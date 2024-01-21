import { UserRespository } from '../../repositories/UserRepository';
import { CreateUserService } from './CreateUserService';
import { CreateUserController } from './CreateUserController';

const createUserController = new CreateUserController(
  new CreateUserService(UserRespository.getInstance())
);

export { createUserController };
