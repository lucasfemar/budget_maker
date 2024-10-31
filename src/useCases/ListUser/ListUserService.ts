import { getDataSource } from "../../../infra/database";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
interface IRequest {
  quotationId: string;
}
class ListUserService {
  constructor() {}
  async execute(): Promise<User[]> {
    const dataSource = getDataSource();
    const user = await dataSource.getRepository(User).find();
    return user;
  }
}
export { ListUserService };
