import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"; // Deve ser importado antes das funções assincronas
import "reflect-metadata";
import dotenv from "dotenv";

import { router } from "./routes";
import { getDataSource } from "../infra/database";

dotenv.config({ path: ".env.development" });

function main() {
  const PORT = 8080;
  const dataSource = getDataSource();
  dataSource
    .initialize()
    .then(() => {
      console.log("Database initialized sucessfully!");
    })
    .catch((error) => {
      console.error("Erro initializing database!", error);
    });
  const app = express();
  app.use(express.json());
  app.use(router);
  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction,
    ) => {
      // Todos os erros que usamos *throw new Error* no nosso código
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      // Erros restantes
      return response
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
    },
  );
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

main();
