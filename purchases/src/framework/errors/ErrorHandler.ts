import {Request, Response} from "express"
import {DefaultErrorResponseDTO} from "@/framework/errors/DefaultErrorResponseDTO"
import BusinessError from "@/framework/errors/BusinessError"
import EntityNotFound from "@/framework/errors/EntityNotFound"
import UnauthorizedException from "@/framework/errors/UnauthorizedException"
import InvalidHeaderException from "@/framework/errors/InvalidHeaderException"
import {gLogger} from "@/framework/utilities/logs/LogUtilities"

function errorHandler(err: Error, req: Request, res: Response) {
    gLogger.error(err)
    if (err instanceof BusinessError) {
        return res.status(422).json(<DefaultErrorResponseDTO>{
            error: "BusinessError",
            message: err.message,
            code: 422,
            stack: err.stack
        })
    } else if (err instanceof EntityNotFound) {
        return res.status(422).json(<DefaultErrorResponseDTO>{
            error: "EntityNotFound",
            message: err.message,
            code: 422,
            stack: err.stack
        })
    } else if (err instanceof UnauthorizedException) {
        return res.status(401).json(<DefaultErrorResponseDTO>{
            error: "UnauthorizedException",
            message: err.message,
            code: 401,
            stack: err.stack
        })
    } else if (err instanceof InvalidHeaderException) {
        return res.status(401).json(<DefaultErrorResponseDTO>{
            error: "InvalidHeaderException",
            message: err.message,
            code: 401,
            stack: err.stack
        })
    } else {
        return res.status(400).json(<DefaultErrorResponseDTO>{
            error: "Erro desconhecido",
            message: err.message,
            code: 400,
            stack: err.stack
        })
    }
}

export {errorHandler}