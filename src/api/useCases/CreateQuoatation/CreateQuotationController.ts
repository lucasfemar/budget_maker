import { Request, Response } from 'express';
import { CreateQuotationService } from './CreateQuotationService';

class CreateQuotationController {
    constructor(private createQuotationService: CreateQuotationService) {}
    handle(request: Request, response: Response) {
        const { status, priority, description, deposit, services, materials } = request.body;
        const quotation = this.createQuotationService.execute({
            status,
            priority,
            description,
            deposit,
            services,
            materials,
        });

        return response.status(201).json(quotation);
    }
}

export { CreateQuotationController };
