import {CustomerEntity} from "@/customer/CustomerEntity";

interface AddressEntity {
    id_address: number
    street: string
    number: number
    district: string
    zip_code: string
    city: string
    state: string
    customer: CustomerEntity[]
}

export {AddressEntity}