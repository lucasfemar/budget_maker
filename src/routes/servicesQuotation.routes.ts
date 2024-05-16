import { Router } from "express";
import { listServiceQuotationController } from "../useCases/ListServiceQuotation";

const serviceQuotationRouter = Router();

serviceQuotationRouter.get("/quotation/:id", (request, response) => {
  listServiceQuotationController.handle(request, response);
});

export { serviceQuotationRouter };
