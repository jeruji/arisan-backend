import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArisandetailService } from './arisandetail.service';
import { ArisandetailController } from './arisandetail.controller';
import { ArisandetailSchema } from './schemas/arisandetail.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Arisandetail', schema: ArisandetailSchema }])
    ],
    providers: [ArisandetailService],
    controllers: [ArisandetailController]
})
export class ArisandetailModule {}
