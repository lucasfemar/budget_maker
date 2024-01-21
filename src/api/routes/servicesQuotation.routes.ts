import { Router } from 'express';
import { listServiceQuotationController } from '../useCases/ListServiceQuotation';

const serviceQuotationRoute = Router();

serviceQuotationRoute.get('/quotation/:id', (request, response) => {
    listServiceQuotationController.handle(request, response);
});

export { serviceQuotationRoute };
