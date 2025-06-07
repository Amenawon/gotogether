import { Repository } from 'typeorm';
import { User } from '../entity/users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findByEmail(email: string): Promise<User | undefined>;
    createUser(email: string, password: string): Promise<User>;
}
