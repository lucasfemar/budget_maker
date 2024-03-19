interface IRequestServices {
    name: string;
    price: number;
    hourQuantity: number;
    quantity: number;
    hourCalc: boolean;
}

interface IRequestMaterials {
    name: string;
    unitMeasurement: string;
    price: number;
    quantity: number;
}

export { IRequestServices, IRequestMaterials };
