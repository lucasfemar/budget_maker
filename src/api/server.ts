import express, { NextFunction, Request, Response, response } from 'express';
import 'express-async-errors'; // Deve ser importado antes das funções assincronas

import { router } from './routes';
function main() {
    const PORT = 8080;
    const app = express();
    app.use(express.json());
    app.use(router);
    app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
        // Todos os erros que usamos *throw new Error* no nosso código
        if (error instanceof Error) {
            return response.status(400).json({ error: error.message });
        }
        // Erros restantes
        return response.status(500).json({ status: 'error', message: 'Internal Server Error' });
    });
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
}

main();
