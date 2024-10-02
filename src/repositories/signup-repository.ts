import { UserData } from "protocols";
import prisma from "../database";
import bcrypt from "bcrypt";

async function insertUser(userData: UserData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const result = await prisma.user.create({
    data: {
        ...userData,
        password: hashedPassword
    }
   });

   return result;
}

async function checkEmailExists(userData: UserData) {
    const result = await prisma.user.findFirst({
        where: {
            email: userData.email
        }
    });

    return result !== null;
}

const signupRepository = {
    insertUser,
    checkEmailExists
}

export default signupRepository;