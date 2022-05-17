interface DefaultResponse {
    message: string
}

const defaultResponse = (aMessage: string) => <DefaultResponse>{message: aMessage}

export {defaultResponse}