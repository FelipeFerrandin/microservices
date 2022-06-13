import {ProductEntity} from "@/product/ProductEntity"
import {PurchaseEntity} from "@/purchase/PurchaseEntity"

interface PurchaseDetailEntity {
    id_purchase_detail: number
    product_id: number
    product: ProductEntity
    purchase_id: number
    purchase: PurchaseEntity
}

export {PurchaseDetailEntity}