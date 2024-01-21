import { User } from '../entities/User';
import { ICreateUserDTO, IUserRepository } from './interfaces/IUserRepository';

class UserRespository implements IUserRepository {
  private users: User[] = [];

  private static INSTANCE: UserRespository;

  static getInstance(): UserRespository {
    if (!this.INSTANCE) {
      this.INSTANCE = new UserRespository();
    }

    return this.INSTANCE;
  }

  create({ name, email, dateOfBirth, password }: ICreateUserDTO) {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      dateOfBirth,
      password,
    });
    this.users.push(user);
    return user;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}

export { UserRespository };
