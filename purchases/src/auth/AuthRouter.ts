import {Router} from "express"
import {gAuthController} from "@/auth/AuthModule"

const AuthRouter = Router()

AuthRouter.post("/login", (request, response) => {
    return gAuthController.authenticateUser(request, response)
})

AuthRouter.get("/refresh-token", (request, response) => {
    return gAuthController.refreshToken(request, response)
})

export {AuthRouter}