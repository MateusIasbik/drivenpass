import { CredentialData, UserPayload } from "../protocols";
import { conflictError, invalidError, unauthorizedError } from "../errors/error";
import credentialRepository from "../repositories/credential-repository";

async function insertCredential(credentialData: CredentialData, user: UserPayload) {

    const titleExist = await credentialRepository.verifyTitle(credentialData, user);

    if (titleExist) {
        throw conflictError("Título");
    }
    
    const result = await credentialRepository.insertCredential(credentialData, user);  
    return result;
}

const credentialService = {
    insertCredential
}

export default credentialService;