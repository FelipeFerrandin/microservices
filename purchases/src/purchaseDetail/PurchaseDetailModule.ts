import {PurchaseDetailRepository} from "./PurchaseDetailRepository"
import {PurchaseDetailAPI} from "./PurchaseDetailAPI"


const lRepository = PurchaseDetailRepository.create()
const gPurchaseDetailAPI = new PurchaseDetailAPI(lRepository)

export {gPurchaseDetailAPI}