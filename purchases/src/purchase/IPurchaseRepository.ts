import { CompletePurchaseDTO, PurchaseDTO } from "@/purchase/PurchaseDTO"
import { ProductDTO } from "@/product/ProductDTO"

interface IPurchaseRepository {
    createPurchase(aPurchaseDTO: PurchaseDTO, aProductsDTO: ProductDTO[]): Promise<PurchaseDTO>

    getPurchaseById(aIdPurchase: number): Promise<CompletePurchaseDTO>

    recalculatePurchaseValue(aIdPurchase: number, aProductsDTO: ProductDTO[]): Promise<void>

    deletePurchaseById(aIdPurchase: number): Promise<void>

    finalizePurchase(aIdPurchase: number): Promise<void>
}

export { IPurchaseRepository }