import {IProductAPI} from "@/product/IProductAPI"
import {ProductDTO} from "@/product/ProductDTO"
import {IProductRepository} from "@/product/IProductRepository"
import BusinessError from "@/framework/errors/BusinessError"
import ProductBO from "@/product/ProductBO"
import {ProductIDs} from "@/purchase/PurchaseDTO"

class ProductAPI implements IProductAPI {

    constructor(private mIProductRepository: IProductRepository) {
    }

    async createProduct(aProductDTO: ProductDTO): Promise<void> {
        ProductBO.validate(aProductDTO)
        await this.mIProductRepository.createProduct(aProductDTO)
    }

    async getListProduct(): Promise<ProductDTO[]> {
        return await this.mIProductRepository.getListProduct()
    }

    async getProductById(aIdProduct: number): Promise<ProductDTO> {
        if ([null, undefined, {}, NaN, 0, ""].includes(aIdProduct)) throw new BusinessError("Informe um ID de produto valido")
        return await this.mIProductRepository.getProductById(aIdProduct)
    }

    async getProductsByIds(aProductsIds: ProductIDs[]): Promise<ProductDTO[]> {
        return await this.mIProductRepository.getProductsByIds(aProductsIds)
    }

}

export {ProductAPI}