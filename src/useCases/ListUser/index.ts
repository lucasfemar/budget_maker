import { ListUserController } from "./ListUserController";
import { ListUserService } from "./ListUserService";

const listUserService = new ListUserService();
const listUserController = new ListUserController(listUserService);

export { listUserController };
