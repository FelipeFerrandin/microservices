import {PurchaseRepository} from "@/purchase/PurchaseRepository";
import {PurchaseAPI} from "@/purchase/PurchaseAPI";
import {gProductAPI} from "@/product/ProductModule";
import {gPurchaseDetailAPI} from "@/purchaseDetail/PurchaseDetailModule";
import {gCustomerAPI} from "@/customer/CustomerModule";
import {PurchaseController} from "@/purchase/PurchaseController";


const lRepository = PurchaseRepository.create()
const lPurchaseAPI = new PurchaseAPI(lRepository, gProductAPI, gPurchaseDetailAPI, gCustomerAPI)
const gPurchaseController = new PurchaseController(lPurchaseAPI)

export {gPurchaseController}