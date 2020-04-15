import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';


@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>){}

    //fetch all customers
    async getAllCustomer(): Promise<Customer[]> {
        const customers = await this.customerModel.find().exec();
        return customers;
    }

    //get a single customer
    async getCustomer(customerID): Promise<Customer> {
        const customer = await this.customerModel.find(customerID).exec();
        return customer;
    }

    //get a single customer by firebaseId
    async getCustomerByFirebaseId(firebaseId): Promise<Customer> {
        const customer = await this.customerModel.find({firebaseId: firebaseId}).exec();
        return customer;
    }

    //post a single customer
    async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const newCustomer = await this.customerModel(createCustomerDTO);
        return newCustomer.save();
    }

    //edit customer details
    async updateCustomer(customerID, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const updatedCustomer = await this.customerModel.findByIdAndUpdate(customerID, createCustomerDTO, { new: true });
        return updatedCustomer;
    }

    //delete a customer
    async deleteCustomer(customerID): Promise<any> {
        const deleteCustomer = await this.customerModel.findByIdAndRemove(customerID);
        return deleteCustomer;
    }
}
