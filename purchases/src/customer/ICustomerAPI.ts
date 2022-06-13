import {CustomerDTO} from "@/customer/CustomerDTO"

interface ICustomerAPI {
    createCustomer(aCustomer: CustomerDTO): Promise<void>;

    getCompleteCustomer(aIdCustomer: number): Promise<CustomerDTO>

    getCompleteCustomerWithPassword(aEmailCustomer: string): Promise<CustomerDTO>
}

export {ICustomerAPI}