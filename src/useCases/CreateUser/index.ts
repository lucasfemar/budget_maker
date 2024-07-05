import { CreateUserService } from "./CreateUserService";
import { CreateUserController } from "./CreateUserController";
const createUserController = new CreateUserController(new CreateUserService());
export { createUserController };
