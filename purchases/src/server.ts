import express, { Request, Response } from 'express'
import dotenv from "dotenv"
import bodyParser from "body-parser"
import compression from "compression"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import CorsConfigurationUtilities from "@/framework/utilities/cors/CorsConfigurationUtilities"
import { CustomerRouter } from "@/customer/CustomerRouter"
import { ProductRouter } from "./product/ProductRouter"
import { PurchaseRouter } from "@/purchase/PurchaseRouter"

dotenv.config()

const app = express()
dotenv.config()
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(cors(CorsConfigurationUtilities.getCorsConfig()))
app.use(morgan('tiny'))
app.disable('x-powered-by')

app.use("/customer", CustomerRouter)
app.use("/product", ProductRouter)
app.use("/purchase", PurchaseRouter)

app.use((err: Error, req: Request, res: Response, next: () => void) => {
    //
})

app.listen(process.env.APPLICATION_PORT, () => console.log(`Application is running on port ${process.env.APPLICATION_PORT}`))