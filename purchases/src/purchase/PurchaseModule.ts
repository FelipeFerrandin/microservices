import {PurchaseRepository} from "@/purchase/PurchaseRepository"
import {PurchaseAPI} from "@/purchase/PurchaseAPI"
import {gProductAPI} from "@/product/ProductModule"
import {gPurchaseDetailAPI} from "@/purchaseDetail/PurchaseDetailModule"
import {gCustomerAPI} from "@/customer/CustomerModule"
import {PurchaseController} from "@/purchase/PurchaseController"
import {KafkaProducerMessage} from "@/framework/providers/kafka/KafkaProducerMessage"


const lRepository = PurchaseRepository.create()
const lKafkaProducerMessage = new KafkaProducerMessage()
const lPurchaseAPI = new PurchaseAPI(lRepository, gProductAPI, gPurchaseDetailAPI, gCustomerAPI, lKafkaProducerMessage)
const gPurchaseController = new PurchaseController(lPurchaseAPI)

export {gPurchaseController}