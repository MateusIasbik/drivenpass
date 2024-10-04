import { UserData } from "protocols";
import prisma from "../database";
import bcrypt from "bcrypt";

async function verifyPassword(userData: UserData) {

    const user = await verifyUser(userData);
    if(!user) {
        return false;
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password)
    return isPasswordValid;
}

async function verifyEmail(userData: UserData) {
    
    const result = await prisma.user.findFirst({
        where: { email: userData.email }
    });

    return result !== null;
}

async function verifyUser(userData: UserData) {
    
    const user = await prisma.user.findFirst({
        where: { email: userData.email }
    });

    return user;
}

const signinRepository = {
    verifyEmail,
    verifyPassword,
    verifyUser
}

export default signinRepository;