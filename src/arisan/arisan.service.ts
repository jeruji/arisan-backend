import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Arisan } from './interfaces/arisan.interface';
import { CreateArisanDTO } from './dto/create-arisan.dto';

@Injectable()
export class ArisanService {
    constructor(@InjectModel('Arisan') private readonly arisanModel: Model<Arisan>) { }

    //fetch all arisan
    async getAllArisan(): Promise<Arisan[]>{
        const arisans = await this.arisanModel.find().exec();
        return arisans;
    }
    //get a single arisan
    async getArisan(arisanID): Promise<Arisan> {
        const arisan = await this.arisanModel.findById(arisanID).exec();
        return arisan;
    }
    //post a single arisan
    async addArisan(createArisanDTO: CreateArisanDTO): Promise<Arisan>{
        const newArisan = await this.arisanModel(createArisanDTO);
        return newArisan.save();
    }
    //edit arisan details
    async updateArisan(arisanID, createArisanDTO: CreateArisanDTO): Promise<Arisan> {
        const updatedArisan = await this.arisanModel.findByIdAndUpdate(arisanID, CreateArisanDTO, { new: true });
        return updatedArisan;
    }
    //delete arisan
    async deleteArisan(arisanID): Promise<any> {
        const deletedArisan = await this.arisanModel.finidByIdAndRemove(arisanID);
        return deletedArisan;
    }
}

