import { CredentialData, UserPayload } from "protocols";
import prisma from "../database";

async function insertCredential(credentialData: CredentialData, user: UserPayload) {

    const result = await prisma.credential.findFirst({
        where: {userId: 1}
    });

    return result !== null;
}

const credentialRepository = {
    insertCredential
}

export default credentialRepository;