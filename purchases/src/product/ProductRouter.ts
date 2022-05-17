import {Router} from "express";
import {gProductController} from "@/product/ProductModule";

const ProductRouter = Router()

ProductRouter.get("", (req, res) => {
    return gProductController.getListProduct(req, res)
})

ProductRouter.get("/:id", (req, res) => {
    return gProductController.getProductById(req, res)
})

ProductRouter.post("", (req, res) => {
    return gProductController.createProduct(req, res)
})

export {ProductRouter}