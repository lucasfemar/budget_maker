import { ServiceQuotationRepository } from '../../repositories/ServiceQuotationRepository';
import { ListServiceQuotationController } from './ListServiceQuotatioController';
import { ListServiceQuotationService } from './ListServiceQuotationService';

const serviceQuotationRepository = ServiceQuotationRepository.getInstance();
const listServiceQuotationService = new ListServiceQuotationService(serviceQuotationRepository);
const listServiceQuotationController = new ListServiceQuotationController(
    listServiceQuotationService
);

export { listServiceQuotationController };
