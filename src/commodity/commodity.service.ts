import { Injectable } from '@nestjs/common';
import { AddCommodityDto } from './commodity.dto';
@Injectable()
export class CommodityService {
    // 新增商品信息
    addCommodity(commodity: AddCommodityDto): Promise<any> {
        
        return ;
    }
}