import { CredentialData, UserPayload } from "../protocols";
import { invalidError, unauthorizedError } from "../errors/error";
import credentialRepository from "../repositories/credential-repository";
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.CRYPTR_SECRET as string);


async function insertCredential(credentialData: CredentialData, user: UserPayload) {

    // const userId = await signinRepository.verifyUser()
    
    const result = await credentialRepository.insertCredential(credentialData, user);

    // if (!emailExists) {
    //     throw invalidError("E-mail");
    // }

    // const isPasswordValid = await signinRepository.verifyPassword(userData);

    // if (!isPasswordValid) {
    //     throw unauthorizedError("Senha");
    // }
    

    return result;
}

const credentialService = {
    insertCredential
}

export default credentialService;