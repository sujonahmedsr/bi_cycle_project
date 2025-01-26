export interface userInterface {
    name: string,
    email: string,
    password: string,
    role: "admin" | "customer",
    isBlocked: boolean
}

export interface loginInterface {
    email: string,
    password: string
}