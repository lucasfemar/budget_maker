import { v4 as uuid } from "uuid";
class ServiceQuotation {
  id?: string;
  quotation_id: string;
  name: string;
  price: number;
  quantity: number;
  hourQuantity: number;
  hourCalc: boolean;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { ServiceQuotation };
