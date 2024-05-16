import { v4 as uuid } from "uuid";
class Quotation {
  id?: string;
  status: string;
  priority: String;
  description: string;
  totalPrice: number;
  deposit: number;
  finalPrice: number;
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

export { Quotation };
