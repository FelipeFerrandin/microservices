import express, {Request, Response} from 'express'
import dotenv from "dotenv"
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config()

const app = express()
dotenv.config()
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(morgan('dev'))
app.disable('x-powered-by')


app.use((err: Error, req: Request, res: Response, next: () => void) => {

})

app.listen(process.env.APPLICATION_PORT, () => console.log(`Application is running on port ${process.env.APPLICATION_PORT}`))