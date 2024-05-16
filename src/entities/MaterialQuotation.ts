import { v4 as uuid } from "uuid";
class MaterialQuotation {
  id?: string;
  quoatation_id: string;
  name: string;
  unitMeasurement: string;
  price: number;
  quantity: number;
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

export { MaterialQuotation };
