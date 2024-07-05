import { hash } from "bcrypt";
import { getUserRepository } from "../../repositories/UserRepository";
import { getConnection } from "../../../infra/database";

interface IRequest {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

class CreateUserService {
  async execute({ name, email, password, dateOfBirth }: IRequest) {
    const database = await getConnection();
    const userRepository = getUserRepository(database);
    if (!name) throw new Error("Field `name` can not be empty.");
    if (!email) throw new Error("Field `email` can not be empty.");
    if (!password) throw new Error("Field `password` can not be empty.");
    if (!dateOfBirth) throw new Error("Field `dateOfBirth` can not be empty.");

    const userExist = userRepository.findByEmail(email);

    if (userExist) {
      throw new Error("User already exists.");
    }

    const encriptedPassword = await hash(password, 8);
    return userRepository.create({
      name,
      email,
      password: encriptedPassword,
      dateOfBirth,
    });
  }
}

export { CreateUserService };
