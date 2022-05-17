import {DataBaseClient} from "@/framework/providers/database/PrismaClient"
import {ProductDTO} from "@/product/ProductDTO"
import {IPurchaseDetailRepository} from "./IPurchaseDetailRepository"

class PurchaseDetailRepository implements IPurchaseDetailRepository {

    private static mInstance: PurchaseDetailRepository
    private mDataBase

    public static create() {
        return this.mInstance || (this.mInstance = new this())
    }

    constructor() {
        this.mDataBase = DataBaseClient.create().getDatabaseInstance()
    }

    async insertProductInPurchase(aIDPurchase: number, aIdProduct: number): Promise<void> {
        await this.mDataBase.purchaseDetail.create({
            data: {
                purchase_id: aIDPurchase,
                product_id: aIdProduct
            }
        })
    }

    async searchProducts(aIDPurchase: number): Promise<ProductDTO[]> {
        const lProducts = await this.mDataBase.purchaseDetail.findMany({
            select: {
                product: true
            },
            where: {
                purchase_id: aIDPurchase
            }
        })

        return lProducts.map(iProduct => <ProductDTO>{
            id_product: iProduct.product.id_product,
            name: iProduct.product.name,
            price: Number(iProduct.product.price.toFixed(2))
        })

    }

    async deleteProduct(aIdPurchaseDetail: number): Promise<void> {
        await this.mDataBase.purchaseDetail.delete({
            where: {
                id_purchase_detail: aIdPurchaseDetail
            }
        })
    }

}

export {PurchaseDetailRepository}