import {lKafka} from "@/framework/providers/kafka/KafkaProvider"

export const lProducer = lKafka.producer({
    allowAutoTopicCreation: true,
})

lProducer.connect().then(() => {
    console.log('Kafka producer connected')
})