import {IPurchaseDetailAPI} from "@/purchaseDetail/IPurchaseDetailAPI";
import {ProductDTO} from "@/product/ProductDTO";
import {IPurchaseDetailRepository} from "@/purchaseDetail/IPurchaseDetailRepository";
import BusinessError from "@/framework/errors/BusinessError";

class PurchaseDetailAPI implements IPurchaseDetailAPI {

    constructor(private mIPurchaseDetailRepository: IPurchaseDetailRepository) {
    }

    async deleteProduct(aIdPurchaseDetail: number): Promise<void> {
        if ([null, undefined, '', 0, NaN, {}].includes(aIdPurchaseDetail)) throw new BusinessError("Informe um ID de compra valido")
        await this.mIPurchaseDetailRepository.deleteProduct(aIdPurchaseDetail)
    }

    async insertProductInPurchase(aIDPurchase: number, aIdProduct: number): Promise<void> {
        //TODO VALIDATE
        await this.mIPurchaseDetailRepository.insertProductInPurchase(aIDPurchase, aIdProduct)
    }

    async searchProducts(aIDPurchase: number): Promise<ProductDTO[]> {
        if ([null, undefined, '', 0, NaN, {}].includes(aIDPurchase)) throw new BusinessError("Informe um ID de compra valido")
        return await this.mIPurchaseDetailRepository.searchProducts(aIDPurchase)
    }

}

export {PurchaseDetailAPI}
