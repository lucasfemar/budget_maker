import { Router } from "express";
import { usersRouter } from "./users.routes";
import { loginRouter } from "./login.routes";
import { quotationRouter } from "./quotation.routes";
import { serviceQuotationRouter } from "./servicesQuotation.routes";
import { statusRouter } from "./status.routes";

const router = Router();

router.use("/user", usersRouter);
// router.use("/login", loginRouter);
router.use("/quotation", quotationRouter);
router.use("/serviceQuotation", serviceQuotationRouter);
router.use("/api/v1/status", statusRouter);
export { router };
