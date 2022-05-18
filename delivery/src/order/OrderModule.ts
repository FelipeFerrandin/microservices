import {OrderRepository} from "@/order/OrderRepository";
import {OrderAPI} from "@/order/OrderAPI";
import {OrderKafkaAPI} from "@/order/OrderKafkaAPI";

const lOrderRepository = OrderRepository.create()
const lOrderAPI = new OrderAPI(lOrderRepository)
new OrderKafkaAPI(lOrderAPI)
export {lOrderAPI}