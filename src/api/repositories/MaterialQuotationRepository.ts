import { MaterialQuotation } from '../entities/MaterialQuotation';
import { IMaterialQuotationRepository } from './interfaces/IMaterialQuoatationRepository';

class MaterialQuotationRepository implements IMaterialQuotationRepository {
    private materialsQuotation: MaterialQuotation[] = [];
    private static INSTANCE: MaterialQuotationRepository;
    static getInstance(): MaterialQuotationRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new MaterialQuotationRepository();
        }
        return this.INSTANCE;
    }
    bulkCreate(materialsQuotation: MaterialQuotation[]): string[] {
        materialsQuotation.forEach((materialQuotation) => {
            this.materialsQuotation.push(materialQuotation);
        });

        const materialsIds = materialsQuotation.map((materialQuotation) => {
            return materialQuotation.id;
        });

        return materialsIds;
    }
    create(materialQuotation: MaterialQuotation): MaterialQuotation {
        return null;
    }
    list(quotationId: string): MaterialQuotation[] {
        const materialsQuotation = this.materialsQuotation.filter((materialQuotation) => {
            return materialQuotation.id === quotationId;
        });
        return materialsQuotation;
    }
    delete(materialQuotation: String): boolean {
        return null;
    }
}

export { MaterialQuotationRepository };
