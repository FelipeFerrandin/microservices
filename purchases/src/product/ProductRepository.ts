import {IProductRepository} from "@/product/IProductRepository"
import {ProductDTO} from "@/product/ProductDTO"
import {DataBaseClient} from "@/framework/providers/database/prisma/PrismaClient"
import {ProductIDs} from "@/purchase/PurchaseDTO"

class ProductRepository implements IProductRepository {

    private static mInstance: ProductRepository
    private mDataBase

    public static create() {
        return this.mInstance || (this.mInstance = new this())
    }

    constructor() {
        this.mDataBase = DataBaseClient.create().getDatabaseInstance()
    }

    async createProduct({name, price}: ProductDTO): Promise<void> {
        await this.mDataBase.product.create({
            data: {
                name, price
            }
        })
    }

    async getListProduct(): Promise<ProductDTO[]> {
        //TODO PAGINACAO
        const lProductsEntity = await this.mDataBase.product.findMany()
        return lProductsEntity.map(iProductEntity => <ProductDTO><unknown>{
            id_product: iProductEntity.id_product,
            name: iProductEntity.name,
            price: Number(iProductEntity.price.toFixed(2))
        }) ?? []
    }

    async getProductById(aIdProduct: number): Promise<ProductDTO> {
        const lProductEntity = await this.mDataBase.product.findFirst({where: {id_product: aIdProduct}})
        return {
            id_product: lProductEntity?.id_product ?? 0,
            name: lProductEntity?.name ?? "",
            price: Number(lProductEntity?.price.toFixed(2)) ?? 0,
        }
    }

    async getProductsByIds(aProductsIds: ProductIDs[]): Promise<ProductDTO[]> {
        const lProducts = await this.mDataBase.product.findMany({
            where: {
                id_product: {
                    in: aProductsIds.map(iProducts => iProducts.id_product)
                }
            }
        })

        return lProducts.map(iProducts => <ProductDTO><unknown>{
            id_product: iProducts.id_product,
            name: iProducts.name,
            price: iProducts.price
        })

    }

}

export {ProductRepository}