import {Router} from "express";
import {lCustomerController} from "@/customer/CustomerModule";

const CustomerRouter = Router()

CustomerRouter.post("", (request, response) => {
    return lCustomerController.createCustomer(request, response)
})

CustomerRouter.get("/complete/:id", (request, response) => {
    return lCustomerController.getCompleteCustomer(request, response)
})

export {CustomerRouter}