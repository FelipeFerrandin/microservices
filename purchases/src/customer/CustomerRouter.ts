import {Router} from "express"
import {lCustomerController} from "@/customer/CustomerModule"
import {ensureAuthenticated} from "@/auth/AuthMiddleware"

const CustomerRouter = Router()

CustomerRouter.post("", (request, response) => {
    return lCustomerController.createCustomer(request, response)
})

CustomerRouter.get("/complete/:id", ensureAuthenticated, (request, response) => {
    return lCustomerController.getCompleteCustomer(request, response)
})

export {CustomerRouter}