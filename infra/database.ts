import { DataSource } from "typeorm";
import { databaseconfig } from "./dbconfigs";

function getDataSource() {
  const dataSource = new DataSource(databaseconfig);
  return dataSource;
}

export { getDataSource };
