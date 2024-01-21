import { UserRespository } from '../../repositories/UserRepository';
import { LoginContoller } from './LoginController';
import { LoginService } from './LoginService';

const loginController = new LoginContoller(new LoginService(UserRespository.getInstance()));

export { loginController };
