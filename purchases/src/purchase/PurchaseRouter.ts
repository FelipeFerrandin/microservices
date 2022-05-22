import { Router } from "express"
import { gPurchaseController } from "@/purchase/PurchaseModule"

const PurchaseRouter = Router()

PurchaseRouter.post("", (req, res) => {
    return gPurchaseController.createPurchase(req, res)
})

PurchaseRouter.get("/:idPurchase", (req, res) => {
    return gPurchaseController.getPurchaseById(req, res)
})

PurchaseRouter.delete("/:idPurchase", (req, res) => {
    return gPurchaseController.deletePurchaseById(req, res)
})

PurchaseRouter.put("/:idPurchase", (req, res) => {
    return gPurchaseController.insertProductInPurchase(req, res)
})

PurchaseRouter.delete("/:idPurchase/:idPurchaseDetail", (req, res) => {
    return gPurchaseController.deleteProductPurchaseById(req, res)
})

export { PurchaseRouter }