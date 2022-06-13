import {ProductRepository} from "@/product/ProductRepository"
import {ProductAPI} from "@/product/ProductAPI"
import ProductController from "@/product/ProductController"


const lProductRepository = ProductRepository.create()
const gProductAPI = new ProductAPI(lProductRepository)
const gProductController = new ProductController(gProductAPI)

export {gProductAPI, gProductController}