import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { listUserController } from "../useCases/ListUser";

const usersRouter = Router();

usersRouter.get("/", (request: Request, response: Response) => {
  return listUserController.handle(request, response);
});

usersRouter.post("/", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { usersRouter };
