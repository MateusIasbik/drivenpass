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

async function getCredentials(user: UserPayload) {
    const credentials = await prisma.credential.findMany({
        where: { userId: user.id }
    });

    const decryptedCredentials = credentials.map(credential => ({
        ...credential,
        password: cryptr.decrypt(credential.password)
    }));

    return decryptedCredentials;
}

async function getCredentialById(credentialId: number) {
    const credentials = await prisma.credential.findMany({
        where: {
            id: credentialId
        }
    });

    const decryptedCredentials = credentials.map(credential => ({
        ...credential,
        password: cryptr.decrypt(credential.password)
    }));

    return decryptedCredentials;
}

async function editCredential(credentialId: number, credentialData: CredentialData) {
    const { title, url, username, password } = credentialData;

    const updateData: Partial<CredentialData> = {};

    if (title) updateData.title = title;
    if (url) updateData.url = url;
    if (username) updateData.username = username;
    if (password) updateData.password = cryptr.encrypt(password);

    await prisma.credential.update({
        where: { id: credentialId },
        data: updateData
    });
}

async function deleteCredentialById(credentialId: number, user: UserPayload) {
    await prisma.credential.delete({
        where: { 
            id: credentialId,
            userId: user.id
        }
    });
}

async function getUserIdByUser(credentialId: number, user: UserPayload) {
    const result = await prisma.credential.findFirst({
        where: { 
            id: credentialId,
            userId: user.id
        }
    });

    return result !== null;
 
}

const credentialRepository = {
    insertCredential,
    verifyTitle,
    getCredentials,
    getCredentialById,
    editCredential,
    getUserIdByUser,
    deleteCredentialById
}

export default credentialRepository;