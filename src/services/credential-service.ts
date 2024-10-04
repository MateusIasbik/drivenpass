import { CredentialData, UserPayload } from "../protocols";
import { conflictError, invalidError, notFoundError, unauthorizedError } from "../errors/error";
import credentialRepository from "../repositories/credential-repository";

async function insertCredential(credentialData: CredentialData, user: UserPayload) {

    const titleExist = await credentialRepository.verifyTitle(credentialData, user);

    if (titleExist) {
        throw conflictError("Título");
    }
    
    const result = await credentialRepository.insertCredential(credentialData, user);  
    return result;
}

async function getCredentialById(credentialId: number, user: UserPayload) {

    const credentials = await credentialRepository.getCredentialById(credentialId, user);

    if (credentials.length === 0) {
        throw notFoundError("ID");
    }

    return credentials;

}

const credentialService = {
    insertCredential,
    getCredentialById
}

export default credentialService;