import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DompetdetailService } from './dompetdetail.service';
import { DompetdetailController } from './dompetdetail.controller';
import { DompetdetailSchema } from './schemas/dompetdetail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dompetdetail', schema: DompetdetailSchema }])
  ],
  providers: [DompetdetailService],
  controllers: [DompetdetailController]
})
export class DompetdetailModule {}
