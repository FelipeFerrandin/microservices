import {CustomerDTO} from "@/customer/CustomerDTO";

interface ICustomerRepository {
    createCustomer(aCustomer: CustomerDTO): Promise<void>;

    getCompleteCustomer(aIdCustomer: number): Promise<CustomerDTO>
}

export {ICustomerRepository}