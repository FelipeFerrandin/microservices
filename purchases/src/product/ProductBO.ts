import {ProductDTO} from "@/product/ProductDTO"
import BusinessError from "@/framework/errors/BusinessError"

export default class ProductBO {
    static validate({name, price}: ProductDTO) {
        if ([undefined, null, "", 0, {}, NaN].includes(name)) throw new BusinessError("Informe um nome valido para o produto")
        if ([undefined, null, "", {}, NaN].includes(price)) throw new BusinessError("Informe um valor valido para o produto")
    }
}