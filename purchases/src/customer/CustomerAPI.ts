import {ICustomerAPI} from "@/customer/ICustomerAPI"
import {CustomerDTO} from "@/customer/CustomerDTO"
import {ICustomerRepository} from "@/customer/ICustomerRepository"
import CustomerBO from "@/customer/CustomerBO"
import BusinessError from "@/framework/errors/BusinessError"
import {hash} from "bcryptjs"

class CustomerAPI implements ICustomerAPI {

    constructor(private mICustomerRepository: ICustomerRepository) {
    }

    async createCustomer(aCustomer: CustomerDTO): Promise<void> {
        CustomerBO.validate(aCustomer)
        //TODO VALIDAR SE O USUARIO COM ESTE EMAIL JA EXISTE
        aCustomer.password = await hash(aCustomer.password ?? "", 8)
        await this.mICustomerRepository.createCustomer(aCustomer)
    }

    async getCompleteCustomer(aCustomer: number): Promise<CustomerDTO> {
        if ([NaN, undefined, null, 0, {}, ""].includes(aCustomer)) throw new BusinessError("Informe um ID de cliente valido")
        return await this.mICustomerRepository.getCompleteCustomer(aCustomer)
    }

    async getCompleteCustomerWithPassword(aEmailCustomer: string): Promise<CustomerDTO> {
        if ([NaN, undefined, null, 0, {}, ""].includes(aEmailCustomer)) throw new BusinessError("Informe um email de cliente valido")
        return await this.mICustomerRepository.getCompleteCustomerWithPassword(aEmailCustomer)
    }
}

export {CustomerAPI}