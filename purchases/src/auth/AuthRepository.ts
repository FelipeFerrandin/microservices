import {IAuthRepository} from "@/auth/IAuthRepository"
import {RedisClient} from "@/framework/providers/database/redis/RedisClient"
import {AuthenticationTokenDTO} from "@/auth/AuthenticateUserDTO"


class AuthRepository implements IAuthRepository {

    private static mInstance: AuthRepository
    private mRedisClient

    public static create() {
        return this.mInstance || (this.mInstance = new this())
    }

    constructor() {
        this.mRedisClient = RedisClient.create()
    }

    async createRefreshToken(aAuthenticationTokenDTO: AuthenticationTokenDTO): Promise<void> {
        await this.mRedisClient.setRegister(`auth-refresh-token-${aAuthenticationTokenDTO.token}`, aAuthenticationTokenDTO)
    }

    async getRefreshToken(aToken: string): Promise<AuthenticationTokenDTO> {
        const lAuthenticateRefreshTokenDTO = await this.mRedisClient.getRegister(`auth-refresh-token-${aToken}`)
        return JSON.parse(lAuthenticateRefreshTokenDTO ?? "{}")
    }

    async deleteRefreshToken(aToken: string) {
        await this.mRedisClient.deleteRegister(aToken)
    }
}

export {AuthRepository}