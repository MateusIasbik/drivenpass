export function conflictError(entity: string) {
    return {
        type: "conflict",
        message: `${entity} já foi cadastrado, tente outro.`
    }
}

export function invalidError(entity: string) {
    return {
        type: "invalidId",
        message: `${entity} não existe!`
    };
}
