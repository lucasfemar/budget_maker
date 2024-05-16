import { DataSource, DataSourceOptions } from "typeorm";

async function getConnection() {
  const databaseCredentials: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    // logging: ['query'],
  };
  const connection = new DataSource(databaseCredentials);
  await connection.initialize();
  return connection;
}

export { getConnection };
