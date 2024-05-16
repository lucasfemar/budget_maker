import { QuoatationRepository } from "../../repositories/QuotationRepository";
import { CreateQuotationController } from "./CreateQuotationController";
import { CreateQuotationService } from "./CreateQuotationService";

import { ServiceQuotationRepository } from "../../repositories/ServiceQuotationRepository";
import { MaterialQuotationRepository } from "../../repositories/MaterialQuotationRepository";

const quotationRepository = QuoatationRepository.getInstance();
const serviceQuotationRepository = ServiceQuotationRepository.getInstance();
const materialQuotationRepository = MaterialQuotationRepository.getInstance();
const createQuotationService = new CreateQuotationService(
  quotationRepository,
  serviceQuotationRepository,
  materialQuotationRepository,
);
const createQuotationController = new CreateQuotationController(
  createQuotationService,
);

export { createQuotationController };
