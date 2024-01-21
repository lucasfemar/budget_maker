import { Router } from 'express';
import { usersRoutes } from './users.routes';
import { loginRouter } from './login.routes';
import { quotationRouter } from './quotation.routes';
import { serviceQuotationRoute } from './servicesQuotation.routes';

const router = Router();

router.use('/user', usersRoutes);
router.use('/login', loginRouter);
router.use('/quotation', quotationRouter);
router.use('/serviceQuotation', serviceQuotationRoute);
export { router };
