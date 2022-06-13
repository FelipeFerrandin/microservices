import {AuthenticateUserDTO, AuthenticationTokenDTO} from "@/auth/AuthenticateUserDTO"

interface IAuthAPI {
    authenticateUser(aAuthenticateUserDTO: AuthenticateUserDTO): Promise<AuthenticationTokenDTO>;

    refreshToken(aToken: string): Promise<AuthenticationTokenDTO>;
}

export {IAuthAPI}