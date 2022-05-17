import {CustomerDTO} from "@/customer/CustomerDTO";

interface ICustomerAPI {
    createCustomer(aCustomer: CustomerDTO): Promise<void>;

    getCompleteCustomer(aIdCustomer: number): Promise<CustomerDTO>
}

export {ICustomerAPI}