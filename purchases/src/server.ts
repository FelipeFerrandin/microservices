import express, {Request, Response} from 'express'
import "express-async-errors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import compression from "compression"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import CorsConfigurationUtilities from "@/framework/utilities/cors/CorsConfigurationUtilities"
import {CustomerRouter} from "@/customer/CustomerRouter"
import {ProductRouter} from "./product/ProductRouter"
import {PurchaseRouter} from "@/purchase/PurchaseRouter"
import {NextFunction} from "express/ts4.0"
import {errorHandler} from "@/framework/errors/ErrorHandler"
import {AuthRouter} from "@/auth/AuthRouter"
import {ensureAuthenticated} from "@/auth/AuthMiddleware"
import {gLogger} from "@/framework/utilities/logs/LogUtilities"

dotenv.config()

const app = express()
dotenv.config()
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(cors(CorsConfigurationUtilities.getCorsConfig()))

app.use(morgan("dev",{
    stream: {
        write(str: string) {
            gLogger.info(str)
            console.log(str)
        }
    }
}))

app.disable('x-powered-by')

app.use("/customer", CustomerRouter)
app.use("/product", ensureAuthenticated, ProductRouter)
app.use("/purchase", ensureAuthenticated, PurchaseRouter)
app.use("/auth", AuthRouter)

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    return errorHandler(err, req, res)
})

app.listen(process.env.APPLICATION_PORT, () => console.log(`Application is running on port ${process.env.APPLICATION_PORT}`))