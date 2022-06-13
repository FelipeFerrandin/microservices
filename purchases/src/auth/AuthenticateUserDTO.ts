interface AuthenticateUserDTO {
    email: string
    password: string
}

interface AuthenticationTokenDTO {
    token: string
    customer_id: number
    expireIn: number
}

export {
    AuthenticateUserDTO,
    AuthenticationTokenDTO
}