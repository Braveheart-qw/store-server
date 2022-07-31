import { Global, Module } from '@nestjs/common';
import { CommodityController } from './commodity.controller';
import { CommodityService } from './commodity.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommoditySchema, Commodity } from './commodity.schema';
// MongooseModule提供了forFeature()方法来配置模块，包括定义哪些模型应该注册在当前范围中
@Module({
    imports: [MongooseModule.forFeature([{ name: Commodity.name, schema: CommoditySchema }])],
    controllers: [CommodityController],
    providers: [CommodityService],
})
export class CommodityModule { }
