import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AddClassifyDto } from './classify.dto';
@Controller('classify')
export class classifyController {
    @Post('add')
    addClassify(@Body() addClassify:AddClassifyDto) {
        
    }

}