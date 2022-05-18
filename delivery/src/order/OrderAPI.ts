import {IOrderAPI} from "@/order/IOrderAPI";
import {OrderDTO} from "@/order/OrderDTO";
import IOrderRepository from "@/order/IOrderRepository";

class OrderAPI implements IOrderAPI {

    constructor(private readonly mIOrderRepository: IOrderRepository) {
    }

    async create(aOrderDTO: OrderDTO): Promise<void> {
        //TODO validate
        await this.mIOrderRepository.createOrder(aOrderDTO)
    }

    async getAllCustomerDetails(): Promise<OrderDTO[]> {
        return await this.mIOrderRepository.getAllCustomerDetails()
    }

    async getCustomerDetailsById(aIDOrder: number): Promise<OrderDTO> {
        return await this.mIOrderRepository.getCustomerDetailsById(aIDOrder)
    }

}

export {OrderAPI}