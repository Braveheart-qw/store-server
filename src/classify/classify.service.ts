import { Injectable } from '@nestjs/common';
import { AddClassifyDto } from './classify.dto';
@Injectable()
export class ClassifyService {
    // 新增商品信息
    addClassify(addClassifyDto: AddClassifyDto): Promise<any> {
        
        return ;
    }
}