import {TopicsConstants} from "@/framework/providers/kafka/TopicsConstants";

interface IKafkaProducerMessage {
    sendMessage<T>(topic: TopicsConstants, message: T): Promise<void>
}

export {IKafkaProducerMessage}