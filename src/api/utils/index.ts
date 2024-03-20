import { IRequestMaterials, IRequestServices } from '../DTO/interfaces';

function getTotalPriceServices(services: IRequestServices[]): number {
    const totalPrice = services.reduce((total, service): number => {
        if (service.hourCalc) {
            return total + service.hourQuantity * 130.0 * service.quantity;
        } else {
            return total + service.quantity * service.price;
        }
    }, 0);

    return totalPrice;
}

function getTotalPriceMaterials(materials: IRequestMaterials[]): number {
    const totalPrice = materials.reduce((total, material): number => {
        return total + material.quantity * material.price;
    }, 0);

    return totalPrice;
}

class ErrorLog {
    private errorsMessages = [];
    public getErrorsMessages() {
        if (this.errorsMessages.length > 0) {
            return this.errorsMessages.join(',');
        }
        return null;
    }
    public setErrorsMessages(message: string) {
        this.errorsMessages.push(message);
    }
}

export { getTotalPriceServices, getTotalPriceMaterials, ErrorLog };
