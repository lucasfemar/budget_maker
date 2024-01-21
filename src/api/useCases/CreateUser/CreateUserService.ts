import { UserRespository } from '../../repositories/UserRepository';
import { hash } from 'bcrypt';

interface IRequest {
    name: string;
    email: string;
    password: string;
    dateOfBirth: string;
}

class CreateUserService {
    constructor(private userRepository: UserRespository) {}
    async execute({ name, email, password, dateOfBirth }: IRequest) {
        if (!name) throw new Error('Field `name` can not be empty.');
        if (!email) throw new Error('Field `email` can not be empty.');
        if (!password) throw new Error('Field `password` can not be empty.');
        if (!dateOfBirth) throw new Error('Field `dateOfBirth` can not be empty.');

        const userExist = this.userRepository.findByEmail(email);

        if (userExist) {
            throw new Error('User already exists.');
        }

        const encriptedPassword = await hash(password, 8);
        return this.userRepository.create({
            name,
            email,
            password: encriptedPassword,
            dateOfBirth,
        });
    }
}

export { CreateUserService };
