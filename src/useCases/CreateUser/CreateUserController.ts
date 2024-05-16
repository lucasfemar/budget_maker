import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response) {
    const { name, email, password, dateOfBirth } = request.body;
    const reponse = await this.createUserService.execute({
      name,
      email,
      password,
      dateOfBirth,
    });
    return response.status(201).json(reponse);
  }
}

export { CreateUserController };
