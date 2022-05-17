import {ICustomerRepository} from "@/customer/ICustomerRepository";
import {CustomerDTO} from "@/customer/CustomerDTO";
import {DataBaseClient} from "@/framework/providers/database/PrismaClient";

class CustomerRepository implements ICustomerRepository {

    private static mInstance: CustomerRepository;
    private mDataBase

    public static create() {
        return this.mInstance || (this.mInstance = new this());
    }

    constructor() {
        this.mDataBase = DataBaseClient.create().getDatabaseInstance()
    }

    async createCustomer(aCustomer: CustomerDTO): Promise<void> {
        await this.mDataBase.customer.create({
            data: {
                email: aCustomer.email,
                name: aCustomer.name,
                address: {
                    create: {
                        number: aCustomer.number,
                        city: aCustomer.city,
                        district: aCustomer.district,
                        state: aCustomer.state,
                        street: aCustomer.state,
                        zip_code: aCustomer.zip_code
                    }
                }
            }
        })
    }

    async getCompleteCustomer(aIDCustomer: number): Promise<CustomerDTO> {
        const lCustomerDTO = await this.mDataBase.customer.findFirst({
            select: {
                id_customer: true,
                email: true,
                name: true,
                address: true
            },
            where: {
                id_customer: aIDCustomer
            }
        })

        return {
            id_customer: lCustomerDTO?.id_customer ?? 0,
            name: lCustomerDTO?.name ?? "",
            email: lCustomerDTO?.email ?? "",
            address_id: lCustomerDTO?.address.id_address ?? 0,
            street: lCustomerDTO?.address.street ?? "",
            number: lCustomerDTO?.address.number ?? 0,
            district: lCustomerDTO?.address.district ?? "",
            zip_code: lCustomerDTO?.address.zip_code ?? "",
            city: lCustomerDTO?.address.city ?? "",
            state: lCustomerDTO?.address.state ?? ""
        }
    }

}

export {CustomerRepository}