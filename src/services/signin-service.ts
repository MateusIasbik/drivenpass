import { UserData } from "../protocols";
import { invalidError, unauthorizedError } from "../errors/error";
import signinRepository from "../repositories/signin-repository";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

async function loginUser(userData: UserData) {
    const emailExists = await signinRepository.verifyEmail(userData);

    if (!emailExists) {
        throw invalidError("E-mail");
    }

    const isPasswordValid = await signinRepository.verifyPassword(userData);

    if (!isPasswordValid) {
        throw unauthorizedError("Senha");
    }
    
    const user = await signinRepository.verifyUser(userData);

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' }); 
    return token;
}

const signinService = {
    loginUser
}

export default signinService;