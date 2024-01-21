import { ServiceQuotation } from '../entities/ServiceQuotation';
import { IServiceQuotationRepository } from './interfaces/IServiceQuoatationRepository';

class ServiceQuotationRepository implements IServiceQuotationRepository {
    private servicesQuotation: ServiceQuotation[] = [];
    private static INSTANCE: ServiceQuotationRepository;

    static getInstance(): ServiceQuotationRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new ServiceQuotationRepository();
        }
        return this.INSTANCE;
    }
    bulkCreate(servicesQuotation: ServiceQuotation[]): string[] {
        servicesQuotation.forEach((serviceQuotation) => {
            this.servicesQuotation.push(serviceQuotation);
        });
        const quotationsIds = this.servicesQuotation.map((serviceQuotation) => {
            return serviceQuotation.id;
        });

        return quotationsIds;
    }
    create(serviceQuotation: ServiceQuotation): ServiceQuotation {
        return null;
    }
    list(quotationId: string): ServiceQuotation[] {
        const servicesQuotation = this.servicesQuotation.filter((serviceQuotation) => {
            return serviceQuotation.quotation_id === quotationId;
        });
        return servicesQuotation;
    }
    delete(serviceQuotationId: String): boolean {
        return null;
    }
}

export { ServiceQuotationRepository };
