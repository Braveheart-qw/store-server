import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddSubclassDto } from './subclass.dto';
import { SubclassDocument, Subclass } from './subclass.schema';

@Injectable()
export class SubclassService {
    constructor(@InjectModel('Subclass') private subclassModel: Model<SubclassDocument>) { }

    // 新增子类
    addsubclass(addSubclass: AddSubclassDto): Promise<any> {
        const insertSubclass = new this.subclassModel(addSubclass);
        return insertSubclass.save();
    }
}