import { Request, Response } from "express";
import { ListUserService } from "./ListUserService";

class ListUserController {
  constructor(private listUserService: ListUserService) {}
  handle(request: Request, response: Response) {
    const users = this.listUserService.execute();
    response.status(200).json(users);
  }
}
export { ListUserController };
