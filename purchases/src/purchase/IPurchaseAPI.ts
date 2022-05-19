import { CompletePurchaseDTO, ProductIDs, PurchaseCreateDTO } from "@/purchase/PurchaseDTO"

interface IPurchaseAPI {
    createPurchase(aPurchaseCreateDTO: PurchaseCreateDTO): Promise<void>

    getPurchaseById(aIdPurchase: number): Promise<CompletePurchaseDTO>

    insertProductInPurchase(aIDPurchase: number, aIdsProducts: ProductIDs[]): Promise<void>

    deleteProductPurchaseById(aIDPurchase: number, aIDPurchaseDetail: number): Promise<void>

    deletePurchaseById(aIdPurchase: number): Promise<void>

    finalizePurchase(aIdPurchase: number): Promise<void>
}

export { IPurchaseAPI }