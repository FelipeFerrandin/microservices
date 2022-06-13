import {PurchaseEntity} from "@/purchase/PurchaseEntity"
import {AddressEntity} from "@/address/AddressEntity"

interface CustomerEntity {
    id_customer: number
    name: string
    email: string
    password: string
    address_id: number
    purchases: PurchaseEntity[]
    address: AddressEntity
}

export {CustomerEntity}