import {PrismaClient} from '@prisma/client'

class DataBaseClient {

    private static mInstance: DataBaseClient;
    private readonly mDatabaseInstance

    public static create() {
        return this.mInstance || (this.mInstance = new this());
    }

    constructor() {
        this.mDatabaseInstance = new PrismaClient({
            log: ["error", "warn"],
        })
    }

    getDatabaseInstance() {
        return this.mDatabaseInstance
    }

}


export {DataBaseClient}