import { User } from "../../entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

interface IUserRepository {
  findByEmail(email: string): User;
}

export { IUserRepository, ICreateUserDTO };
