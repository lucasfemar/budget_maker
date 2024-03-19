describe('Quotation creation', () => {
    test('Should return http status 400', async () => {
        const response = await fetch('http://localhost:8080/quotation', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                status: '',
                priority: '',
                description: '',
                totalPrice: '',
                deposit: '',
                services: [],
                materials: [],
            }),
        });
        expect(response.status).toBe(400);
    });
    test('Should create quotation with correct price', async () => {
        const quoationBody = {
            status: 'PENDENTE',
            priority: 'ALTA',
            description: 'Orçamento de elétrca.',
            deposit: 50.0,
            services: [
                {
                    name: 'Instalação ventilador',
                    price: 150.0,
                    quantity: 1,
                    hourCalc: false,
                },
                {
                    name: 'Troca da fiação',
                    price: 200.0,
                    quantity: 1,
                    hourQuantity: 2,
                    hourCalc: true,
                },
                {
                    name: 'Instalação ar condidionado',
                    price: 200.0,
                    quantity: 2,
                    hourQuantity: 3,
                    hourCalc: true,
                },
            ],
            materials: [
                {
                    name: 'Cabo vermelho 0.5mm',
                    unitMeasurement: '',
                    price: 30.0,
                    quantity: 1,
                },
                {
                    name: 'Cabo azul 0.5mm',
                    unitMeasurement: '',
                    price: 40.0,
                    quantity: 1,
                },
            ],
        };
        const response = await fetch('http://localhost:8080/quotation', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(quoationBody),
        });
        const totalPriceServices = quoationBody.services.reduce((total, service) => {
            if (service.hourCalc) {
                return total + service.hourQuantity * 130 * service.quantity;
            }
            return total + service.quantity * service.price;
        }, 0);
        const totalPriceMaterials = quoationBody.materials.reduce((total, material) => {
            return total + material.quantity * material.price;
        }, 0);
        const totalPrice = totalPriceMaterials + totalPriceServices;
        const finalPrice = totalPrice - quoationBody.deposit;
        const responseBody = await response.json();
        expect(responseBody.totalPrice).toBe(totalPrice);
        expect(responseBody.finalPrice).toBe(finalPrice);
    });
});
