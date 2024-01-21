import { IUserRepository } from '../../repositories/interfaces/IUserRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IRequest {
    email: string;
    password: string;
}

class LoginService {
    constructor(private userRepository: IUserRepository) {}
    async execute({ email, password }: IRequest) {
        const user = this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Email or password invalid!');
        }

        const validPassword = await compare(password, user.password);

        if (!validPassword) {
            throw new Error('Email or password invalid!');
        }

        const token = sign(
            {
                email: user.email,
            },
            '5c801978-0d64-47d6-b9c7-2d82bffe5b83',
            {
                subject: user.id,
                expiresIn: '1d',
            }
        );

        return token;
    }
}

export { LoginService };
