import { CheckApplicationStatusController } from "./CheckApplicationStatusController";
import { CheckApplicationStatusService } from "./CheckApplicationStatusService";

const checkApplicationStatusService = new CheckApplicationStatusService();
const checkApplicationStatusController = new CheckApplicationStatusController(
  checkApplicationStatusService,
);

export { checkApplicationStatusController };
