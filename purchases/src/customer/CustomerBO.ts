import {CustomerDTO} from "@/customer/CustomerDTO";
import BusinessError from "@/framework/errors/BusinessError";
import AddressBO from "@/address/AddressBO";

export default class CustomerBO {

    static validate(aCustomerDTO: CustomerDTO) {
        if ([undefined, null, "", {}, NaN, 0].includes(aCustomerDTO.name)) throw new BusinessError("Infome seu nome")
        if ([undefined, null, "", {}, NaN, 0].includes(aCustomerDTO.email)) throw new BusinessError("Infome seu email")
        AddressBO.validate({
            number: aCustomerDTO.number,
            city: aCustomerDTO.city,
            district: aCustomerDTO.district,
            state: aCustomerDTO.state,
            street: aCustomerDTO.street,
            zip_code: aCustomerDTO.zip_code
        })
    }

}