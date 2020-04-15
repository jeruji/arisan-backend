import { Module } from '@nestjs/common';
import { ArisanService } from './arisan.service';
import { ArisanController } from './arisan.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArisanSchema } from './schemas/arisan.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Arisan', schema: ArisanSchema }])
  ],
  providers: [ArisanService],
  controllers: [ArisanController]
})
export class ArisanModule {}
