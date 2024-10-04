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

async function getCredentials(user: UserPayload) {

    const result = await credentialRepository.getCredentials(user);

    return result;

}

async function getCredentialById(credentialId: number) {

    const credentials = await credentialRepository.getCredentialById(credentialId);

    if (credentials.length === 0) {
        throw notFoundError("ID");
    }

    return credentials;

}

async function editCredential(credentialId: number, credentialData: CredentialData) {

    await credentialRepository.editCredential(credentialId, credentialData);

}

async function deleteCredentialById(credentialId: number) {

    const credentials = await credentialRepository.getCredentialById(credentialId);

    if (credentials.length === 0) {
        throw notFoundError("ID");
    }

    await credentialRepository.deleteCredentialById(credentialId);
}

const credentialService = {
    insertCredential,
    getCredentials,
    getCredentialById,
    editCredential,
    deleteCredentialById
}

export default credentialService;