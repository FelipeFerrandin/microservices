import {ProductDTO} from "@/product/ProductDTO"
import {ProductIDs} from "@/purchase/PurchaseDTO"

interface IProductRepository {
    createProduct(aProductDTO: ProductDTO): Promise<void>

    getListProduct(): Promise<ProductDTO[]>

    getProductById(aIdProduct: number): Promise<ProductDTO>

    getProductsByIds(aProductsIds: ProductIDs[]): Promise<ProductDTO[]>
}

export {IProductRepository}