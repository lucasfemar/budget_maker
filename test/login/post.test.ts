describe('LOGIN USER ENDPOINT', () => {
    const user = {
        name: 'Dummy Dummy',
        email: 'dummy98l@gmail.com',
        password: '123456789',
        dateOfBirth: '01/01/2000',
    };
    const invalidUser = {
        name: 'Dummy Inexistente',
        email: 'dummyInexistente98l@gmail.com',
        password: '123456789',
        dateOfBirth: '01/01/2000',
    };
    beforeAll(async () => {
        await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    });
    it('http://localhost:8080/login should return status 201', async () => {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, password: user.password }),
        });
        expect(response.status).toBe(201);
    });

    it('http://localhost:8080/login should return status 400', async () => {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: invalidUser.email, password: invalidUser.password }),
        });
        expect(response.status).toBe(400);
    });
});
