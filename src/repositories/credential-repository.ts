import { CredentialData, UserPayload } from "protocols";
import prisma from "../database";
import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.CRYPTR_SECRET as string);

async function insertCredential(credentialData: CredentialData, user: UserPayload) {
    const { title, url, username, password } = credentialData;

    const encryptedPassword = cryptr.encrypt(password);

    const result = await prisma.credential.create({
        data: {
            title,
            url,
            username,
            password: encryptedPassword,
            userId: user.id
        }
       });
    
       return result;
}

async function verifyTitle(credentialData: CredentialData, user: UserPayload) {
    const result = await prisma.credential.findFirst({
        where: {
            title: credentialData.title,
            userId: user.id
        }
    });

    return result !== null; 
}

async function getCredentialById(credentialId: number, user: UserPayload) {

    const credentials = await prisma.credential.findMany({
        where: { 
            userId: credentialId
        }
    });

    const decryptedCredentials = credentials.map(credential => ({
        ...credential,
        password: cryptr.decrypt(credential.password)
    }));

    return decryptedCredentials;
}

const credentialRepository = {
    insertCredential,
    verifyTitle,
    getCredentialById
}

export default credentialRepository;