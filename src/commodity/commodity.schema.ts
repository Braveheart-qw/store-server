/*
    Prop: 每个文档的属性
    Schema: 映射成集合
*/
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CommodityDocument = Commodity & Document;
@Schema()  //标记一个类作为Schema定义，它将我们的Student类映射到mongodb同名负数的集合Students
export class Commodity extends Document { 
    @Prop() //在文档中定义一个属性，并且可以为属性定义类型，不过在ts中，类型会被自动推断，但是ts无法正确推断嵌套类型，如course属性中，需要一个对象数组
    name: string

    @Prop()
    price: number

    @Prop()
    image: string

    @Prop()
    buyCount: number

    @Prop()
    classify: string

}
export const CommoditySchema = SchemaFactory.createForClass(Commodity);