import {lProducer} from "@/framework/providers/kafka/KafkaProducer";
import {TopicsConstants} from "@/framework/providers/kafka/TopicsConstants";
import {IKafkaProducerMessage} from "@/framework/providers/kafka/IKafkaProducerMessage";

class KafkaProducerMessage implements IKafkaProducerMessage {
    async sendMessage<T>(aTopic: TopicsConstants, aMessage: T): Promise<void> {
        await lProducer.send({
            topic: aTopic,
            messages: [
                {value: JSON.stringify(aMessage)}
            ]
        })
    }
}

export {KafkaProducerMessage}
