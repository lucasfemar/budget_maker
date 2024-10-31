import dotenv from "dotenv";

import { DataSourceOptions } from "typeorm";
// TODO - RESOLVER VARIÁVEIS DE AMBIENTE NESSE ARQUIVO PARA PODER TESTAR
// A ROTA DE CHECK APPLICATION STATUS E RODAR AS MIGRATIONS
dotenv.config({ path: ".env.development" });
export const databaseconfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: ["/infra/migrations"],
  entities: ["../src/entities/*.ts"],
};
