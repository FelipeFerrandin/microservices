import {CustomerEntity} from "@/customer/CustomerEntity";
import {PurchaseDetailEntity} from "@/purchaseDetail/PurchaseDetailEntity";

interface PurchaseEntity {
    id_purchase: number
    customer_id: number
    customer: CustomerEntity
    created_at: Date
    total: number
    subtotal: number
    purchase_detail: PurchaseDetailEntity[]
}

export {PurchaseEntity}