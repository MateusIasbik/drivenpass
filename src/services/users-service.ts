import { UserData } from "../protocols";
import { conflictError } from "../errors/error";
import usersRepository from "../repositories/users-repository";

async function insertUser(userData: UserData) {
    
    let emailExists = await usersRepository.checkEmailExists(userData);
    
    if (emailExists) {
        throw conflictError("E-mail");
    }    
    
    let result = await usersRepository.insertUser(userData);
    return result;
}

const usersService = {
    insertUser
}

export default usersService;