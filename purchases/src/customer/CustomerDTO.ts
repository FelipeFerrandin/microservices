interface CustomerDTO {
    id_customer?: number
    name: string
    email: string
    password?: string
    address_id?: number
    street: string
    number: number
    district: string
    zip_code: string
    city: string
    state: string
}

export {CustomerDTO}