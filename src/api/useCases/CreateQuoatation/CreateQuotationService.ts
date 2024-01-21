import { IQuotationRepository } from '../../repositories/interfaces/IQuotationRepository';
import { IRequestMaterials, IRequestServices } from '../../DTO/interfaces';
import { getTotalPriceMaterials, getTotalPriceServices } from '../../utils';
import { IServiceQuotationRepository } from '../../repositories/interfaces/IServiceQuoatationRepository';
import { IMaterialQuotationRepository } from '../../repositories/interfaces/IMaterialQuoatationRepository';
import { ServiceQuotation } from '../../entities/ServiceQuotation';
import { MaterialQuotation } from '../../entities/MaterialQuotation';

interface IRequest {
    status: string;
    priority: string;
    description: string;
    deposit: number;
    services: IRequestServices[];
    materials: IRequestMaterials[];
}

class CreateQuotationService {
    constructor(
        private quotationRepository: IQuotationRepository,
        private serviceQuotationRepository: IServiceQuotationRepository,
        private materialQuotationRepository: IMaterialQuotationRepository
    ) {}
    execute({ status, priority, description, deposit, services, materials }: IRequest) {
        const totalPrice = getTotalPriceServices(services) + getTotalPriceMaterials(materials);
        const quotation = this.quotationRepository.create({
            status,
            priority,
            description,
            totalPrice,
            deposit,
        });
        const servicesToCreate: ServiceQuotation[] = [];
        services.forEach((service) => {
            const serviceQuotation = new ServiceQuotation();
            Object.assign(serviceQuotation, { quotation_id: quotation.id, ...service });
            servicesToCreate.push(serviceQuotation);
        });
        this.serviceQuotationRepository.bulkCreate(servicesToCreate);

        const materialsToCreate: MaterialQuotation[] = [];
        materials.forEach((material) => {
            const materialQuotation = new MaterialQuotation();
            Object.assign(materialQuotation, { quotation_id: quotation.id, ...material });
            materialsToCreate.push(materialQuotation);
        });
        this.materialQuotationRepository.bulkCreate(materialsToCreate);

        return quotation;
    }
}

export { CreateQuotationService };
