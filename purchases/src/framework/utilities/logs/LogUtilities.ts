import log4js from "log4js"
import moment from "moment"

const lDateTime = moment()

const generateLogName = () => {

    const lYear = lDateTime.format("YYYY")
    const lMonth = lDateTime.format("MM")
    const lDay = lDateTime.format("DD")

    return `${lYear}-${lMonth}-${lDay}-purchase.log`
}

log4js.configure({
    appenders: {
        application: {
            compress: true,
            type: "file",
            filename: `logs/${lDateTime.format("YYYY")}/${lDateTime.format("MM")}/${generateLogName()}`
        }
    },
    categories: {
        default: {appenders: ["application"], level: "info"},
        debug: {appenders: ["application"], level: "debug"},
        fatal: {appenders: ["application"], level: "fatal"},
        error: {appenders: ["application"], level: "error"}
    }
})

const gLogger = log4js.getLogger()

export {gLogger}