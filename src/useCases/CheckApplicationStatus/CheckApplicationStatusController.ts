import { CheckApplicationStatusService } from "./CheckApplicationStatusService";

class CheckApplicationStatusController {
  constructor(
    private checkApplicationStatusService: CheckApplicationStatusService,
  ) {}
  async handle(request, response) {
    const applicationStatus =
      await this.checkApplicationStatusService.execute();
    return response.status(200).json(applicationStatus);
  }
}

export { CheckApplicationStatusController };
