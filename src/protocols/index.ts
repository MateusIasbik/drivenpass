export type UserData = {
    name: string,
    email: string,
    password: string
}

export type CredentialData = {
    title: string,
    url: string,
    username: string,
    password: string
};

export type UserPayload = {
    id: number,
    email: string,
    iat: number,
    exp: number
}