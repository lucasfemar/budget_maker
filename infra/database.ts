import { DataSource } from "typeorm";
import { databaseconfig } from "./dbconfigs";

async function getConnection() {
  const connection = new DataSource(databaseconfig);
  await connection.initialize();
  return connection;
}

export { getConnection };
