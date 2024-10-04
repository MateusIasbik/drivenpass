import { UserPayload } from "protocols";
import eraseRepository from "../repositories/erase-repository";

async function deleteAccount(user: UserPayload) {
    await eraseRepository.deleteAccount(user);
}

const eraseService = {
    deleteAccount
}

export default eraseService;