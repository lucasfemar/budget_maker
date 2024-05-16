import { MaterialQuotation } from "../../entities/MaterialQuotation";

interface IMaterialQuotationRepository {
  bulkCreate(materialsQuotation: MaterialQuotation[]): string[];
  create(materialQuotation: MaterialQuotation): MaterialQuotation;
  list(quotationId: string): MaterialQuotation[];
  delete(materialQuotation: String): boolean;
}

export { IMaterialQuotationRepository };
