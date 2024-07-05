import { DataSource } from "typeorm";
import { User } from "../entities/User";

// TOTO - TORNAR FUNÇÃO ASYNC
function getUserRepository(database: DataSource) {
  const UserRespository = database.getRepository(User).extend({
    findByEmail(email: string): User {
      return this.createQueryBuilder("user").where("user.email = :email", {
        email,
      });
    },
  });
  return UserRespository;
}

export { getUserRepository };
