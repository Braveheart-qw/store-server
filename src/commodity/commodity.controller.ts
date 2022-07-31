import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AddCommodityDto } from './commodity.dto';
@Controller('commodity')
export class CommodityController {
    @Post('add')
    addCommodity(@Body() commodity:AddCommodityDto) {
        
    }

}