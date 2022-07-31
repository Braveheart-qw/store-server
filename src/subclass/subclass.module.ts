import { Global, Module } from '@nestjs/common';
import { SubclassController } from './subclass.controller';
import { SubclassService } from './subclass.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubclassSchema, Subclass } from './subclass.schema';
// MongooseModule提供了forFeature()方法来配置模块，包括定义哪些模型应该注册在当前范围中
@Module({
    imports: [MongooseModule.forFeature([{ name: Subclass.name, schema: SubclassSchema }])],
    controllers: [SubclassController],
    providers: [SubclassService],
})
export class SubclassModule { }
