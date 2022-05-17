import {AddressDTO} from "@/address/AddressDTO";
import BusinessError from "@/framework/errors/BusinessError";

export default class AddressBO {

    static validate(aAddressDTO: AddressDTO) {
        if ([undefined, null, "", {}, NaN, 0].includes(aAddressDTO.street)) throw new BusinessError("Informe sua rua")
        if ([undefined, null, "", {}, NaN, 0].includes(aAddressDTO.number)) throw new BusinessError("Informe seu numero")
        if ([undefined, null, "", {}, NaN, 0].includes(aAddressDTO.district)) throw new BusinessError("Informe seu bairro")
        if ([undefined, null, "", {}, NaN, 0].includes(aAddressDTO.zip_code)) throw new BusinessError("Informe seu cep")
        if ([undefined, null, "", {}, NaN, 0].includes(aAddressDTO.city)) throw new BusinessError("Informe sua cidade")
        if ([undefined, null, "", {}, NaN, 0].includes(aAddressDTO.state)) throw new BusinessError("Informe seu estado")
    }

}
