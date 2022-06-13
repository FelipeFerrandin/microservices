import {IAuthAPI} from "@/auth/IAuthAPI"
import {AuthenticateUserDTO, AuthenticationTokenDTO} from "@/auth/AuthenticateUserDTO"
import {ICustomerAPI} from "@/customer/ICustomerAPI"
import BusinessError from "@/framework/errors/BusinessError"
import {compareSync} from "bcryptjs"
import {sign} from "jsonwebtoken"
import {IAuthRepository} from "@/auth/IAuthRepository"
import moment from "moment"
import UnauthorizedException from "@/framework/errors/UnauthorizedException"

class AuthAPI implements IAuthAPI {

    constructor(private mICustomerAPI: ICustomerAPI, private mIAuthRepository: IAuthRepository) {
    }

    async authenticateUser({email, password}: AuthenticateUserDTO): Promise<AuthenticationTokenDTO> {
        if ([NaN, undefined, null, 0, {}, ""].includes(email)) throw new BusinessError("Informe um email valido")
        if ([NaN, undefined, null, 0, {}, ""].includes(password)) throw new BusinessError("Informe uma senha valida")
        const lCustomerDTO = await this.mICustomerAPI.getCompleteCustomerWithPassword(email)
        if (!lCustomerDTO) throw new BusinessError("Usuario ou senha incorretos")
        const lValidPassword = compareSync(password, lCustomerDTO.password ?? "")
        if (!lValidPassword) throw new BusinessError("Usuario ou senha incorretos")

        const lToken = sign({}, process.env.KEY_JWT ?? "", {
            subject: lCustomerDTO.id_customer?.toString(),
            expiresIn: "20s"
        })

        const lAuthenticationToken = {
            token: lToken,
            customer_id: lCustomerDTO.id_customer ?? 0,
            expireIn: moment().add(20, "seconds").unix()
        }

        await this.mIAuthRepository.createRefreshToken(lAuthenticationToken)

        return lAuthenticationToken
    }

    async refreshToken(aToken: string) {
        const [, token] = aToken.split(" ")
        const lAuthenticationTokenDTO = await this.mIAuthRepository.getRefreshToken(token)
        const lTokenExpired = moment().isAfter(moment.unix(lAuthenticationTokenDTO.expireIn))
        if (lTokenExpired) throw new UnauthorizedException("Token invalid")

        const lToken = sign({}, process.env.KEY_JWT ?? "", {
            subject: lAuthenticationTokenDTO.customer_id.toString(),
            expiresIn: "20s"
        })

        const lAuthenticationToken = {
            token: lToken,
            customer_id: lAuthenticationTokenDTO.customer_id ?? 0,
            expireIn: moment().add(20, "seconds").unix()
        }

        await this.mIAuthRepository.deleteRefreshToken(token)

        await this.mIAuthRepository.createRefreshToken(lAuthenticationToken)

        return lAuthenticationToken
    }

}

export {AuthAPI}