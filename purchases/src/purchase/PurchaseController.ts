import { IPurchaseAPI } from "@/purchase/IPurchaseAPI"
import { Request, Response } from "express"
import { DefaultErrorResponseDTO } from "@/framework/errors/DefaultErrorResponseDTO"
import { defaultResponse } from "@/framework/utilities/responses/DefaultResponse"
import { runInTransaction } from "@/framework/providers/database/TransactionManager"

class PurchaseController {

    constructor(private mIPurchaseAPI: IPurchaseAPI) {
    }

    async createPurchase(aRequest: Request, aResponse: Response) {
        try {
            const lPurchaseCreateDTO = aRequest.body
            await runInTransaction(async () => {
                await this.mIPurchaseAPI.createPurchase(lPurchaseCreateDTO)
            })
            aResponse.status(200).send(defaultResponse("Compra criada com sucesso!"))
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao buscar compra!",
                code: 422
            })
        }
    }

    async getPurchaseById(aRequest: Request, aResponse: Response) {
        try {
            const lIDPurchase = Number(aRequest.params.idPurchase)
            aResponse.status(200).json(await this.mIPurchaseAPI.getPurchaseById(lIDPurchase))
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao buscar compra!",
                code: 422
            })
        }
    }

    async deletePurchaseById(aRequest: Request, aResponse: Response) {
        try {
            const lIDPurchase = Number(aRequest.params.idPurchase)
            await this.mIPurchaseAPI.deletePurchaseById(lIDPurchase)
            aResponse.status(200).json(defaultResponse("Compra cancelada com sucesso!"))
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao cancelar compra!",
                code: 422
            })
        }
    }

    async insertProductInPurchase(aRequest: Request, aResponse: Response) {
        try {
            const lIDPurchase = Number(aRequest.params.idPurchase)
            const lIdsProducts = aRequest.body
            await runInTransaction(async () => {
                await this.mIPurchaseAPI.insertProductInPurchase(lIDPurchase, lIdsProducts)
            })
            aResponse.status(200).json(defaultResponse("Produto inserido com sucesso!"))
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao inserir produto!",
                code: 422
            })
        }
    }

    async deleteProductPurchaseById(aRequest: Request, aResponse: Response) {
        try {
            const aIDPurchase = Number(aRequest.params.idPurchase)
            const aIDPurchaseDetail = Number(aRequest.params.idPurchaseDetail)
            await this.mIPurchaseAPI.deleteProductPurchaseById(aIDPurchase, aIDPurchaseDetail)
            aResponse.status(200).json(defaultResponse("Produto removido com sucesso!"))
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao remover produto!",
                code: 422
            })
        }
    }

    async finalizePurchase(aRequest: Request, aResponse: Response) {
        try {
            const aIDPurchase = Number(aRequest.params.idPurchase)
            await this.mIPurchaseAPI.finalizePurchase(aIDPurchase)
            aResponse.status(200).json(defaultResponse("Compra finalizada com sucesso!"))
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao finalizar compra!",
                code: 422
            })
        }
    }

}

export { PurchaseController }