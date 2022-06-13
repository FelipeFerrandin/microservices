import {AuthenticationTokenDTO} from "@/auth/AuthenticateUserDTO"

interface IAuthRepository {
    createRefreshToken(aAuthenticateAuthenticationTokenDTO: AuthenticationTokenDTO): Promise<void>;

    getRefreshToken(aToken: string): Promise<AuthenticationTokenDTO>;

    deleteRefreshToken(aToken: string): Promise<void>;
}

export {IAuthRepository}