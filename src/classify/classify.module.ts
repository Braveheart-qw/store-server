import { Global, Module } from '@nestjs/common';
import { classifyController } from './classify.controller';
import { ClassifyService } from './classify.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassifySchema, Classify } from './classify.schema';
// MongooseModule提供了forFeature()方法来配置模块，包括定义哪些模型应该注册在当前范围中
@Module({
    imports: [MongooseModule.forFeature([{ name: Classify.name, schema: ClassifySchema }])],
    controllers: [classifyController],
    providers: [ClassifyService],
})
export class ClassifyModule { }
