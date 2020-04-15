import { Module } from '@nestjs/common';
import { DompetService } from './dompet.service';
import { DompetController } from './dompet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DompetSchema } from './schemas/dompet.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Dompet', schema: DompetSchema }])
    ],
  providers: [DompetService],
  controllers: [DompetController]
})
export class DompetModule {}
