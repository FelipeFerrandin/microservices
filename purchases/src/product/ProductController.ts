import {IProductAPI} from "@/product/IProductAPI";
import {Request, Response} from "express";
import {DefaultErrorResponseDTO} from "@/framework/errors/DefaultErrorResponseDTO";

export default class ProductController {

    constructor(private mIProductAPI: IProductAPI) {
    }

    async createProduct(aRequest: Request, aResponse: Response) {
        try {
            const lProductDTO = aRequest.body
            await this.mIProductAPI.createProduct(lProductDTO)
            aResponse.status(200).json({message: "Produto inserido com sucesso!"})
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao inserir produto!",
                code: 422
            })
        }
    }

    async getListProduct(aRequest: Request, aResponse: Response) {
        try {
            aResponse.status(200).json(await this.mIProductAPI.getListProduct())
        } catch (e) {
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao buscar produtos!",
                code: 422
            })
        }
    }

    async getProductById(aRequest: Request, aResponse: Response) {
        try {
            const lIdProduct = Number(aRequest.params.id)
            aResponse.status(200).json(await this.mIProductAPI.getProductById(lIdProduct))
        } catch (e) {
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao buscar produto!",
                code: 422
            })
        }
    }


}