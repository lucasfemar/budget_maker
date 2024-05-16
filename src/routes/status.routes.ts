import { Router } from "express";
import { checkApplicationStatusController } from "../useCases/CheckApplicationStatus";

const statusRouter = Router();

statusRouter.get("/", (request, response) => {
  checkApplicationStatusController.handle(request, response);
});

export { statusRouter };
