import { IQuotationRepository } from '../../repositories/interfaces/IQuotationRepository';
import { IRequestMaterials, IRequestServices } from '../../DTO/interfaces';
import { getTotalPriceMaterials, getTotalPriceServices } from '../../utils';
import { IServiceQuotationRepository } from '../../repositories/interfaces/IServiceQuoatationRepository';
import { IMaterialQuotationRepository } from '../../repositories/interfaces/IMaterialQuoatationRepository';
import { ServiceQuotation } from '../../entities/ServiceQuotation';
import { MaterialQuotation } from '../../entities/MaterialQuotation';
import { ErrorLog } from '../../util/ErrorLog';

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
        const errorLog = new ErrorLog();
        try {
            if ((!services && !materials) || (services.length === 0 && materials.length === 0)) {
                errorLog.setErrorsMessages('Please provide at least one service or one material');
            }
            if (errorLog.getErrorsMessages()) {
                throw new Error();
            }
            const quotation = this.quotationRepository.create({
                status,
                priority,
                description,
                totalPrice: 0,
                deposit,
                finalPrice: 0,
            });
            let totalPriceServices = 0;
            let totalPriceMaterials = 0;
            if (services.length > 0) {
                const servicesToCreate: ServiceQuotation[] = [];
                totalPriceServices = getTotalPriceServices(services);
                services.forEach((service) => {
                    const serviceQuotation = new ServiceQuotation();
                    Object.assign(serviceQuotation, { quotation_id: quotation.id, ...service });
                    servicesToCreate.push(serviceQuotation);
                });
                if (servicesToCreate.length > 0) {
                    this.serviceQuotationRepository.bulkCreate(servicesToCreate);
                }
            }
            if (materials.length > 0) {
                const materialsToCreate: MaterialQuotation[] = [];
                totalPriceMaterials = getTotalPriceMaterials(materials);
                materials.forEach((material) => {
                    const materialQuotation = new MaterialQuotation();
                    Object.assign(materialQuotation, { quotation_id: quotation.id, ...material });
                    materialsToCreate.push(materialQuotation);
                });
                if (materialsToCreate.length > 0) {
                    this.materialQuotationRepository.bulkCreate(materialsToCreate);
                }
            }
            quotation.totalPrice = totalPriceServices + totalPriceMaterials;
            quotation.finalPrice = quotation.totalPrice - quotation.deposit;
            const quotationUpdated = this.quotationRepository.update(quotation);
            return quotationUpdated;
        } catch (error) {
            if (errorLog.getErrorsMessages()) {
                throw new Error(errorLog.getErrorsMessages());
            }
            throw new Error(error);
        }
    }
}

export { CreateQuotationService };
