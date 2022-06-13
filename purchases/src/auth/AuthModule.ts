import {AuthAPI} from "@/auth/AuthAPI"
import {gCustomerAPI} from "@/customer/CustomerModule"
import {AuthController} from "@/auth/AuthController"
import {AuthRepository} from "@/auth/AuthRepository"

const lAuthRepository = new AuthRepository()
const lAuthAPI = new AuthAPI(gCustomerAPI, lAuthRepository)
const gAuthController = new AuthController(lAuthAPI)

export {gAuthController}