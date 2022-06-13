import Redis from "ioredis"
import {promisify} from "util"

class RedisClient {
    private static mInstance: RedisClient
    private readonly mRedisClient

    public static create() {
        return this.mInstance || (this.mInstance = new this())
    }

    constructor() {
        this.mRedisClient = new Redis()
    }

    getRegister(value: string) {
        const lSyncRedisGet = promisify(this.mRedisClient.get).bind(this.mRedisClient)
        return lSyncRedisGet(value)
    }

    deleteRegister(value: string) {
        const lPipeline = this.mRedisClient.pipeline()
        lPipeline.del(value)
        return lPipeline.exec()
    }

    setRegister<T>(key: string, value: T) {
        const lSyncRedisSet = promisify(this.mRedisClient.set).bind(this.mRedisClient)
        return lSyncRedisSet(key, JSON.stringify(value))
    }


}

export {RedisClient}