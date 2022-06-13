import {PurchaseDetailEntity} from "@/purchaseDetail/PurchaseDetailEntity"

interface ProductEntity {
    id_product: number
    name: string
    price: number
    purchase_detail: PurchaseDetailEntity[]
}

export {ProductEntity}