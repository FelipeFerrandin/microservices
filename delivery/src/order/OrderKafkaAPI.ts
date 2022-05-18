import {gConsumer} from "@/framework/providers/kafka/KafkaConsumer";
import {TopicsConstants} from "@/framework/providers/kafka/TopicsConstants";
import {IOrderAPI} from "@/order/IOrderAPI";
import {OrderDTO} from "@/order/OrderDTO";

class OrderKafkaAPI {

    constructor(private readonly mICustomerDetailAPI: IOrderAPI) {
        this.getMessageOrder().catch(console.error)
    }

    async getMessageOrder() {
        await gConsumer.subscribe({topic: TopicsConstants.KAFKA_TESTE.toString()})
        await gConsumer.run({
            eachMessage: async ({message}) => {
                try {
                    const lOrderDTO: OrderDTO = JSON.parse(message.value?.toString() ?? '{}')
                    if (!lOrderDTO) return
                    await this.mICustomerDetailAPI.create(lOrderDTO)
                } catch (e) {
                    console.error(e)
                }
            }
        })
    }

}

export {
    OrderKafkaAPI
}