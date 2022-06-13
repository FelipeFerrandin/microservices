import {ICustomerAPI} from "@/customer/ICustomerAPI"
import {Request, Response} from "express"

class CustomerController {

    constructor(private mICustomerAPI: ICustomerAPI) {
    }

    async createCustomer(aRequest: Request, aResponse: Response) {
        const lCustomerDTO = aRequest.body
        await this.mICustomerAPI.createCustomer(lCustomerDTO)
        aResponse.status(200).json({message: 'Cliente inserido com sucesso!'})
    }

    async getCompleteCustomer(aRequest: Request, aResponse: Response) {
        const lIdCustomer = Number(aRequest.params.id)
        aResponse.status(200).json(this.mICustomerAPI.getCompleteCustomer(lIdCustomer))
    }
}

export {CustomerController}