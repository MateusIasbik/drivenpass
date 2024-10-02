export function conflictError(entity: string) {
    return {
        type: "conflict",
        message: `${entity} já foi cadastrado, tente outro.`
    }
}

export function invalidError(entity: string) {
    return {
        type: "invalid",
        message: `${entity} não encontrado!`
    };
}

export function unauthorizedError(entity: string) {
    return {
        type: "unauthorized",
        message: `${entity} incorreta!`
    }
}