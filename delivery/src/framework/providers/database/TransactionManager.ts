import { DataBaseClient } from "@/framework/providers/database/PrismaClient"

const runInTransaction = async (aFunction: () => Promise<void>) => {
    const lDatabase = await DataBaseClient.create().getDatabaseInstance()
    lDatabase.$transaction(aFunction).catch(console.error)
}

export { runInTransaction }

