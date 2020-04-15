import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dompet } from './interfaces/dompet.interface';
import { CreateDompetDTO } from './dto/create-dompet.dto';

@Injectable()
export class DompetService {
    constructor(@InjectModel('Dompet') private readonly dompetModel: Model<Dompet>) { }

    //fetch all dompet
    async getAllDompet(): Promise<Dompet[]>{
        const dompets = await this.dompetModel.find().exec();
        return dompets;
    }
    //get a single dompet
    async getDompet(dompetID): Promise<Dompet> {
        const dompet = await this.dompetModel.findById(dompetID).exec();
        return dompet;
    }
    //post a single dompet
    async addDompet(createDompetDTO: CreateDompetDTO): Promise<Dompet>{
        const newDompet = await this.dompetModel(createDompetDTO);
        return newDompet.save();
    }
    //edit dompet details
    async updateDompet(dompetID, createDompetDTO: CreateDompetDTO): Promise<Dompet> {
        const updatedDompet = await this.dompetModel.findByIdAndUpdate(dompetID, CreateDompetDTO, { new: true });
        return updatedDompet;
    }
    //delete dompet
    async deleteDompet(dompetID): Promise<any> {
        const deletedDompet = await this.dompetModel.finidByIdAndRemove(dompetID);
        return deletedDompet;
    }
}
