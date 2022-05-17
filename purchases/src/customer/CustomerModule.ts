import {CustomerRepository} from "@/customer/CustomerRepository";
import {CustomerAPI} from "@/customer/CustomerAPI";
import {CustomerController} from "@/customer/CustomerController";


const lCustomerRepository = CustomerRepository.create()
const gCustomerAPI = new CustomerAPI(lCustomerRepository)
const lCustomerController = new CustomerController(gCustomerAPI)

export {gCustomerAPI, lCustomerController}

