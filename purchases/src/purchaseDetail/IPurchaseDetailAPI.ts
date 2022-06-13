import {ProductDTO} from "@/product/ProductDTO"

interface IPurchaseDetailAPI {
    insertProductInPurchase(aIDPurchase: number, aIdProduct: number): Promise<void>

    searchProducts(aIDPurchase: number): Promise<ProductDTO[]>

    deleteProduct(aIdPurchaseDetail: number): Promise<void>
}

export {IPurchaseDetailAPI}