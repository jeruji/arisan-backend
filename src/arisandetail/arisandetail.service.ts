import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Arisandetail } from './interfaces/arisandetail.interface';
import { CreateArisandetailDTO } from './dto/create-arisandetail.dto';

@Injectable()
export class ArisandetailService {
    constructor(@InjectModel('Arisandetail') private readonly arisandetailModel: Model<Arisandetail>) { }

    //fetch all arisan detail
    async getAllArisandetail(): Promise<Arisandetail[]>{
        const arisandetails = await this.arisandetailModel.find().exec();
        return arisandetails;
    }
    //get a single arisan detail
    async getArisandetail(arisandetailID): Promise<Arisandetail> {
        const arisandetail = await this.arisandetailModel.findById(arisandetailID).exec();
        return arisandetail;
    }
    //get arisan id by email
    async getArisanByEmail(email): Promise<Arisandetail[]> {
        const arisandetail = await this.arisandetailModel.find({"email": email}).sort({created: "desc"}).exec();
        return arisandetail
    }
    //get arisan id by email and not confirmed
    async getArisanNotConfirmed(email): Promise<Arisandetail[]> {
        const arisandetail = await this.arisandetailModel.find({"email": email, "isAccepted": false}).limit(10).sort({created: "desc"}).exec();
        return arisandetail
    }
    //get all arisan id by email and not confirmed
    async getAllArisanNotConfirmed(email): Promise<Arisandetail[]> {
        const arisandetail = await this.arisandetailModel.find({"email": email, "isAccepted": false}).sort({created: "desc"}).exec();
        return arisandetail
    }
    //post a single arisan detail
    async addArisandetail(createArisandetailDTO: CreateArisandetailDTO): Promise<Arisandetail>{
        const newArisandetail = await this.arisandetailModel(createArisandetailDTO);
        return newArisandetail.save();
    }
    //edit arisan detail
    async updateArisandetail(arisandetailID, createArisandetailDTO: CreateArisandetailDTO): Promise<Arisandetail> {
        const updatedArisandetail = await this.arisandetailModel.findByIdAndUpdate(arisandetailID, CreateArisandetailDTO, { new: true });
        return updatedArisandetail;
    }
    //delete arisan detail
    async deleteArisandetail(arisandetailID): Promise<any> {
        const deletedArisandetail = await this.arisandetailModel.finidByIdAndRemove(arisandetailID);
        return deletedArisandetail;
    }
}
