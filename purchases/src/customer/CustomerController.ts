import {ICustomerAPI} from "@/customer/ICustomerAPI";
import {Request, Response} from "express";
import {DefaultErrorResponseDTO} from "@/framework/errors/DefaultErrorResponseDTO";

class CustomerController {

    constructor(private mICustomerAPI: ICustomerAPI) {
    }

    async createCustomer(aRequest: Request, aResponse: Response) {
        try {
            const lCustomerDTO = aRequest.body
            await this.mICustomerAPI.createCustomer(lCustomerDTO)
            aResponse.status(200).json({message: 'Cliente inserido com sucesso!'})
        } catch (e) {
            console.error(e)
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao inserir cliente!",
                code: 422
            })
        }
    }

    async getCompleteCustomer(aRequest: Request, aResponse: Response) {
        try {
            const lIdCustomer = Number(aRequest.params.id)
            aResponse.status(200).json(this.mICustomerAPI.getCompleteCustomer(lIdCustomer))
        } catch (e) {
            aResponse.status(422).json(<DefaultErrorResponseDTO>{
                error: e,
                message: "Erro ao buscar cliente!",
                code: 422
            })
        }
    }
}

export {CustomerController}