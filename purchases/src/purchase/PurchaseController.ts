import {IPurchaseAPI} from "@/purchase/IPurchaseAPI"
import {Request, Response} from "express"
import {defaultResponse} from "@/framework/utilities/responses/DefaultResponse"
import {runInTransaction} from "@/framework/providers/database/prisma/TransactionManager"

class PurchaseController {

    constructor(private mIPurchaseAPI: IPurchaseAPI) {
    }

    async createPurchase(aRequest: Request, aResponse: Response) {
        const lPurchaseCreateDTO = aRequest.body
        await runInTransaction(async () => {
            await this.mIPurchaseAPI.createPurchase(lPurchaseCreateDTO)
        })
        aResponse.status(200).send(defaultResponse("Compra criada com sucesso!"))
    }

    async getPurchaseById(aRequest: Request, aResponse: Response) {
        const lIDPurchase = Number(aRequest.params.idPurchase)
        aResponse.status(200).json(await this.mIPurchaseAPI.getPurchaseById(lIDPurchase))
    }

    async insertProductInPurchase(aRequest: Request, aResponse: Response) {
        const lIDPurchase = Number(aRequest.params.idPurchase)
        const lIdsProducts = aRequest.body
        await runInTransaction(async () => {
            await this.mIPurchaseAPI.insertProductInPurchase(lIDPurchase, lIdsProducts)
        })
        aResponse.status(200).json(defaultResponse("Produto inserido com sucesso!"))
    }

    async deleteProductPurchaseById(aRequest: Request, aResponse: Response) {
        const aIDPurchase = Number(aRequest.params.idPurchase)
        const aIDPurchaseDetail = Number(aRequest.params.idPurchaseDetail)
        await this.mIPurchaseAPI.deleteProductPurchaseById(aIDPurchase, aIDPurchaseDetail)
        aResponse.status(200).json(defaultResponse("Produto removido com sucesso!"))
    }

    async finalizePurchase(aRequest: Request, aResponse: Response) {
        const aIDPurchase = Number(aRequest.params.idPurchase)
        await this.mIPurchaseAPI.finalizePurchase(aIDPurchase)
        aResponse.status(200).json(defaultResponse("Compra finalizada com sucesso!"))
    }

    async cancelPurchase(aRequest: Request, aResponse: Response) {
        const aIDPurchase = Number(aRequest.params.idPurchase)
        await this.mIPurchaseAPI.cancelPurchaseById(aIDPurchase)
        aResponse.status(200).json(defaultResponse("Compra finalizada com sucesso!"))
    }

}

export {PurchaseController}