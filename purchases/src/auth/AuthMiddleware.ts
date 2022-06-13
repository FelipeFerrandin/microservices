import {NextFunction, Request, Response} from "express"
import UnauthorizedException from "@/framework/errors/UnauthorizedException"
import {verify} from "jsonwebtoken"

function ensureAuthenticated(aRequest: Request, aResponse: Response, aNext: NextFunction) {
    const lAuthToken = aRequest.headers.authorization
    if (!lAuthToken) throw new UnauthorizedException("Token is missing")
    const [, token] = lAuthToken.split(" ")

    try {
        verify(token, process.env.KEY_JWT ?? "")
        return aNext()
    } catch (e) {
        throw new UnauthorizedException((e as Error).message)
    }
}

export {ensureAuthenticated}