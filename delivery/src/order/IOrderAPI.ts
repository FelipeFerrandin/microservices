import {OrderDTO} from "@/order/OrderDTO";

export interface IOrderAPI {
    create(aOrderDTO: OrderDTO): Promise<void>

    getAllCustomerDetails(): Promise<OrderDTO[]>

    getCustomerDetailsById(aIDOrder: number): Promise<OrderDTO>
}