import { UserData } from "../protocols";
import { conflictError } from "../errors/error";
import signupRepository from "../repositories/signup-repository";

async function insertUser(userData: UserData) {
    const emailExists = await signupRepository.checkEmailExists(userData);
    
    if (emailExists) {
        throw conflictError("E-mail");
    }    
    
    const result = await signupRepository.insertUser(userData);
    return result;
}

const signupService = {
    insertUser
}

export default signupService;