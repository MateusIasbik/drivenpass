import { UserPayload } from "protocols";
import prisma from "../database";

async function deleteAccount(user: UserPayload) {
    await prisma.user.delete({
        where: { 
            id: user.id,        
        }
    });
}

const eraseRepository = {
    deleteAccount
}

export default eraseRepository;