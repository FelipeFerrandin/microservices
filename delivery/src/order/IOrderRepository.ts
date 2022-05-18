import {OrderDTO} from "@/order/OrderDTO";

export default interface IOrderRepository {
    createOrder(aOrderDTO: OrderDTO): Promise<void>

    getAllCustomerDetails(): Promise<OrderDTO[]>

    getCustomerDetailsById(aIDOrder: number): Promise<OrderDTO>
}