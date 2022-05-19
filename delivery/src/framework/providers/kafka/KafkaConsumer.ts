import { lKafka } from "@/framework/providers/kafka/KafkaProvider"

const gConsumer = lKafka.consumer({ groupId: 'delivery-group', allowAutoTopicCreation: true })

gConsumer.connect().then(() => {
    console.log('Kafka consumer connected')
})

export { gConsumer }