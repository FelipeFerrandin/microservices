import {Request, Response} from "express"
import {IAuthAPI} from "@/auth/IAuthAPI"
import InvalidHeaderException from "@/framework/errors/InvalidHeaderException"


class AuthController {

    constructor(private mIAuthAPI: IAuthAPI) {
    }

    async authenticateUser(aRequest: Request, aResponse: Response) {
        const lAuthenticateUserDTO = aRequest.body
        const lToken = await this.mIAuthAPI.authenticateUser(lAuthenticateUserDTO)
        aResponse.status(200).json(lToken)
    }

    async refreshToken(aRequest: Request, aResponse: Response) {
        const lOldToken = aRequest.headers.authorization
        if (!lOldToken) throw new InvalidHeaderException("authorization token is invalid")
        const lToken = await this.mIAuthAPI.refreshToken(lOldToken)
        aResponse.status(200).json(lToken)
    }

}

export {AuthController}