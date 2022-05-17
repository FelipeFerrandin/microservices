import {lKafka} from "@/framework/providers/kafka/KafkaProvider";

export const lConsumer = lKafka.consumer({groupId: 'classroom-group', allowAutoTopicCreation: true})

lConsumer.connect().then(() => {
    console.log('Kafka consumer connected');
})