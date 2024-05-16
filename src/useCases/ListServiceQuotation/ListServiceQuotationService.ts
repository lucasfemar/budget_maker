import { ServiceQuotation } from "../../entities/ServiceQuotation";
import { IServiceQuotationRepository } from "../../repositories/interfaces/IServiceQuoatationRepository";
interface IRequest {
  quotationId: string;
}
class ListServiceQuotationService {
  constructor(
    private serviceQuotationRepository: IServiceQuotationRepository,
  ) {}
  execute({ quotationId }: IRequest): ServiceQuotation[] {
    return this.serviceQuotationRepository.list(quotationId);
  }
}
export { ListServiceQuotationService };
