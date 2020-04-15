import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { MulterModule } from '@nestjs/platform-express';
import { ArisanModule } from './arisan/arisan.module';
import { ArisandetailModule } from './arisandetail/arisandetail.module';
import { DompetModule } from './dompet/dompet.module';
import { DompetdetailModule } from './dompetdetail/dompetdetail.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/arisan-app', { useNewUrlParser: true }),
    MulterModule.register({
      dest: './files'
    }),
    CustomerModule,
    ArisanModule,
    ArisandetailModule,
    DompetModule,
    DompetdetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
