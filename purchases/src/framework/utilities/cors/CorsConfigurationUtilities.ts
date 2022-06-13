import {CorsOptions} from "cors"

export default class CorsConfigurationUtilities {

    static getCorsConfig(): CorsOptions {
        return {
            origin: "*",
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            preflightContinue: false,
            optionsSuccessStatus: 204,
            allowedHeaders: "Content-Type, Authorization"
        }
    }
}

export {CorsConfigurationUtilities}