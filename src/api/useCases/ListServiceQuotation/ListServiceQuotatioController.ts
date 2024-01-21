import { Request, Response } from 'express';
import { ListServiceQuotationService } from './ListServiceQuotationService';

class ListServiceQuotationController {
    constructor(private listServiceQuotationService: ListServiceQuotationService) {}
    handle(request: Request, response: Response) {
        const quotationId = request.params.id;
        const servicesQuotations = this.listServiceQuotationService.execute({ quotationId });
        response.status(200).json(servicesQuotations);
    }
}
export { ListServiceQuotationController };
