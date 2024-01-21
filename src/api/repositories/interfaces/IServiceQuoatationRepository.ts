import { ServiceQuotation } from '../../entities/ServiceQuotation';

interface IServiceQuotationRepository {
    bulkCreate(servicesQuotation: ServiceQuotation[]): string[];
    create(serviceQuotation: ServiceQuotation): ServiceQuotation;
    list(quotationId: string): ServiceQuotation[];
    delete(serviceQuotationId: String): boolean;
}

export { IServiceQuotationRepository };
