import IOrderRepository from "@/order/IOrderRepository";
import {OrderDTO} from "@/order/OrderDTO";
import {DataBaseClient} from "@/framework/providers/database/PrismaClient";

class OrderRepository implements IOrderRepository {
    private static mInstance: OrderRepository
    private mDataBase

    public static create() {
        return this.mInstance || (this.mInstance = new this())
    }

    constructor() {
        this.mDataBase = DataBaseClient.create().getDatabaseInstance()
    }

    async createOrder({purchase_id, customer_name, id_customer, address_id}: OrderDTO): Promise<void> {
        this.mDataBase.order.create({
            data: {
                purchase_id, customer_name, id_customer, address_id
            }
        })
    }

    async getAllCustomerDetails(): Promise<OrderDTO[]> {
        return await this.mDataBase.order.findMany()
    }

    async getCustomerDetailsById(aIDOrder: number): Promise<OrderDTO> {
        const lOrder = await this.mDataBase.order.findFirst({where: {id_order: aIDOrder}})
        return {
            id_customer: lOrder?.id_customer ?? 0,
            address_id: lOrder?.address_id ?? 0,
            id_order: lOrder?.id_order,
            purchase_id: lOrder?.purchase_id ?? 0,
            customer_name: lOrder?.customer_name ?? ""
        }
    }


}

export {OrderRepository}