import { Request, Response } from 'express';
import { LoginService } from './LoginService';

class LoginContoller {
  constructor(private loginService: LoginService) {}
  async handle(request: Request, response: Response) {
    /** TODO
     *  Verficar se o usuario e senha batem.
     *  Retornar o token de autenticação.
     */
    const { email, password } = request.body;

    const reponse = await this.loginService.execute({ email, password });
    return response.status(201).json(reponse);
  }
}

export { LoginContoller };
