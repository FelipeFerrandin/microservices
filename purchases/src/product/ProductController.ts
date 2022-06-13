import {IProductAPI} from "@/product/IProductAPI"
import {Request, Response} from "express"

export default class ProductController {

    constructor(private mIProductAPI: IProductAPI) {
    }

    async createProduct(aRequest: Request, aResponse: Response) {
        const lProductDTO = aRequest.body
        await this.mIProductAPI.createProduct(lProductDTO)
        aResponse.status(200).json({message: "Produto inserido com sucesso!"})
    }

    async getListProduct(aRequest: Request, aResponse: Response) {
        aResponse.status(200).json(await this.mIProductAPI.getListProduct())
    }

    async getProductById(aRequest: Request, aResponse: Response) {
        const lIdProduct = Number(aRequest.params.id)
        aResponse.status(200).json(await this.mIProductAPI.getProductById(lIdProduct))
    }


}