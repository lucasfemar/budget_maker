import { Quotation } from '../entities/Quotation';
import { IQuotationDTO, IQuotationRepository } from './interfaces/IQuotationRepository';

class QuoatationRepository implements IQuotationRepository {
    private quotations: Quotation[] = [];
    private static INSTANCE: QuoatationRepository;

    static getInstance(): QuoatationRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new QuoatationRepository();
        }
        return this.INSTANCE;
    }

    create({ status, priority, description, totalPrice, deposit }: IQuotationDTO): Quotation {
        const quotation = new Quotation();
        Object.assign(quotation, {
            status,
            priority,
            description,
            totalPrice,
            deposit,
        });
        this.quotations.push(quotation);
        return quotation;
    }
    update(quatation: Quotation): Quotation {
        throw new Error('Method not implemented.');
    }
    findById(quotationId: String): Quotation {
        throw new Error('Method not implemented.');
    }
    find(): Quotation[] {
        throw new Error('Method not implemented.');
    }
}

export { QuoatationRepository };
