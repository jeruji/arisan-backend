import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dompetdetail } from './interfaces/dompetdetail.interface';
import { CreateDompetdetailDTO } from './dto/create-dompetdetail.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class DompetdetailService {
    constructor(@InjectModel('Dompetdetail') private readonly dompetdetailModel: Model<Dompetdetail>) { }

    //fetch all dompet detail
    async getAllDompetdetail(): Promise<Dompetdetail[]>{
        const dompetdetails = await this.dompetdetailModel.find().exec();
        return dompetdetails;
    }
    //get a single dompet detail
    async getDompetdetail(dompetdetailID): Promise<Dompetdetail> {
        const dompetdetail = await this.dompetdetailModel.findById(dompetdetailID).exec();
        return dompetdetail;
    }
    //post a single dompet detail
    async addDompetdetail(createDompetdetailDTO: CreateDompetdetailDTO): Promise<Dompetdetail>{
        const newDompetdetail = await this.dompetdetailModel(createDompetdetailDTO);
        return newDompetdetail.save();
    }
    //get dompet id by email
    async getDompetByEmail(email): Promise<Dompetdetail[]> {
        const dompetdetail = await this.dompetdetailModel.
        find({$or:[{
                $and:[
                    {"email": email},
                    {"paid": true}
                ]
            },
            {
                $and:[
                    {"email": email},
                    {isCreator: true}
                ] 
            }
        ]}).sort({created: "desc"}).exec();

        for(let index=0; index<dompetdetail.length; index++){
            let checkIsAllPaid = await this.dompetdetailModel.find({"paid": false, "dompetId": dompetdetail[index].dompetId}).exec();
            
            if(checkIsAllPaid.length==0){
                dompetdetail.splice(index,1)
            }
        }
        return dompetdetail
    }
    //get dompet id by email and not paid limit 10
    async getDompetNotPaid(email): Promise<Dompetdetail[]> {
        const dompetdetail = await this.dompetdetailModel.find({$and:[{"email": email, "paid": false, "isCreator": false}]}).limit(10).sort({created: "desc"}).exec();
        return dompetdetail
    }
    //get dompet id by email and not paid
    async getAllDompetNotPaid(email): Promise<Dompetdetail[]> {
        const dompetdetail = await this.dompetdetailModel.find({$and:[{"email": email, "paid": false}]}).sort({created: "desc"}).exec();
        Logger.log("dompet detail",dompetdetail.length)
        return dompetdetail
    }
    //get dompet history limit by 10
    async getDompetHistory(email): Promise<Dompetdetail[]> {
        const dompetdetail = await this.dompetdetailModel.find({$and:[{"email": email, "paid": true}]}).sort({created: "desc"}).exec();
        
        for(let index=0; index<dompetdetail.length; index++){
            let checkIsAllPaid = await this.dompetdetailModel.find({"paid": false, "dompetId": dompetdetail[index].dompetId}).exec();
            
            if(checkIsAllPaid.length>0){
                dompetdetail.splice(index,1)
            }
        }

        dompetdetail.length = 10
        
        return dompetdetail
    }
    //edit dompet detail
    async updateDompetdetail(dompetdetailID, createDompetdetailDTO: CreateDompetdetailDTO): Promise<Dompetdetail> {
        const updatedDompetdetail = await this.dompetdetailModel.findByIdAndUpdate(dompetdetailID, CreateDompetdetailDTO, { new: true });
        return updatedDompetdetail;
    }
    //delete dompet detail
    async deleteDompetdetail(dompetdetailID): Promise<any> {
        const deletedDompetdetail = await this.dompetdetailModel.finidByIdAndRemove(dompetdetailID);
        return deletedDompetdetail;
    }
}
