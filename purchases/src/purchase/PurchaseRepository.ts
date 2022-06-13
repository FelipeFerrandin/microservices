import {IPurchaseRepository} from "@/purchase/IPurchaseRepository"
import {CompletePurchaseDTO, PurchaseDTO} from "@/purchase/PurchaseDTO"
import {ProductDTO} from "@/product/ProductDTO"
import {Decimal} from "@prisma/client/runtime"
import {DataBaseClient} from "@/framework/providers/database/prisma/PrismaClient"
import {PurchaseConstants} from "@/framework/utilities/constants/PurchaseConstants"


class PurchaseRepository implements IPurchaseRepository {

    private static mInstance: PurchaseRepository
    private mDataBase

    public static create() {
        return this.mInstance || (this.mInstance = new this())
    }

    constructor() {
        this.mDataBase = DataBaseClient.create().getDatabaseInstance()
    }

    async createPurchase(aPurchaseDTO: PurchaseDTO, aProductsDTO: ProductDTO[]): Promise<PurchaseDTO> {
        const lPurchase = await this.mDataBase.purchase.create({
            data: {
                customer_id: aPurchaseDTO.customer_id,
                situation: PurchaseConstants.COMPRA_INICIADA,
                total: new Decimal(aProductsDTO.reduce((acc, val) => acc + Number(val.price.toFixed(2)), 0)),
                subtotal: new Decimal(aProductsDTO.reduce((acc, val) => acc + Number(val.price.toFixed(2)), 0))
            },
        })

        return {
            id_purchase: lPurchase.id_purchase,
            customer_id: lPurchase.customer_id,
            situation: lPurchase?.situation ?? "",
            total: Number(lPurchase.total.toFixed(2)),
            subtotal: Number(lPurchase.subtotal),
            created_at: lPurchase.created_at
        }

    }

    async deletePurchaseById(aIdPurchase: number): Promise<void> {
        await this.mDataBase.purchase.update({
            data: {
                situation: PurchaseConstants.COMPRA_CANCELADA
            },
            where: {
                id_purchase: aIdPurchase
            }
        })
    }

    async getPurchaseById(aIdPurchase: number): Promise<CompletePurchaseDTO> {
        const lPurchase = await this.mDataBase.purchase.findFirst({
            where: {
                id_purchase: aIdPurchase, AND: [
                    {situation: {not: PurchaseConstants.COMPRA_CANCELADA}}
                ]
            }
        })

        return {
            id_purchase: lPurchase?.id_purchase ?? 0,
            situation: lPurchase?.situation ?? "",
            subtotal: Number(lPurchase?.subtotal.toFixed(2)),
            total: Number(lPurchase?.total.toFixed(2)),
            id_customer: lPurchase?.customer_id ?? 0
        }
    }

    //TODO GET ALL PURCHASE BY CUSTOMER ID

    async recalculatePurchaseValue(aIdPurchase: number, aProductsDTO: ProductDTO[]): Promise<void> {
        await this.mDataBase.purchase.update({
            where: {
                id_purchase: aIdPurchase
            },
            data: {
                subtotal: aProductsDTO.reduce((acc, val) => acc + Number(val.price.toFixed(2)), 0),
                total: aProductsDTO.reduce((acc, val) => acc + Number(val.price.toFixed(2)), 0),
            }
        })
    }

    async finalizePurchase(aIdPurchase: number) {
        await this.mDataBase.purchase.update({
            data: {situation: PurchaseConstants.COMPRA_FINALIZADA},
            where: {id_purchase: aIdPurchase}
        })
    }

    //TODO CANCELAR COMPRA
}

export {PurchaseRepository}