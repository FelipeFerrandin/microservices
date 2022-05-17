import {CustomerDTO} from "@/customer/CustomerDTO";
import {ProductDTO} from "@/product/ProductDTO";

interface PurchaseDTO {
    id_purchase: number
    customer_id: number
    created_at: Date
    total: number
    subtotal: number
}

interface PurchaseCreateDTO {
    purchase: PurchaseDTO
    products: ProductDTO[]
}

interface CompletePurchaseDTO {
    id_purchase: number,
    id_customer: number
    customer?: CustomerDTO,
    products?: ProductDTO[]
    total: number,
    subtotal: number
}

interface ProductIDs {
    id_product: number
}


export {PurchaseDTO, CompletePurchaseDTO, ProductIDs, PurchaseCreateDTO}