import { Quotation } from '../../entities/Quotation';

interface IQuotationDTO {
  status: string;
  priority: String;
  description: string;
  totalPrice: Number;
  deposit: Number;
}

interface IQuotationRepository {
  create(quotation: Quotation): Quotation;
  update(quatation: Quotation): Quotation;
  findById(quotationId: String): Quotation;
  find(): Quotation[];
}

export { IQuotationRepository, IQuotationDTO };
