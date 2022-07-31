import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassifyModule } from './classify/classify.module';
import { CommodityModule } from './commodity/commodity.module';
import { SubclassModule } from './subclass/subclass.module';

@Module({
  imports: [CommodityModule, ClassifyModule, MongooseModule.forRoot('mongodb://localhost/store'),SubclassModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
