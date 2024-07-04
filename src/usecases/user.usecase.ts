import { User,UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase{
    private userRepository: UserRepository
    constructor(){
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name, email}:UserCreate): Promise<User>{
        const verifyIfUserExist = await this.userRepository.findByEmail(email)
        if(verifyIfUserExist){
            throw new Error('User already exists')
        }
        const result = await this.userRepository.create({email,name})

        return result;
    }
}

export { UserUseCase }