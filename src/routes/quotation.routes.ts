import { Request, Response, Router } from "express";
import { createQuotationController } from "../useCases/CreateQuoatation";

const quotationRouter = Router();

quotationRouter.post("/", (request: Request, response: Response) => {
  return createQuotationController.handle(request, response);
});

export { quotationRouter };
