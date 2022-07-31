import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AddSubclassDto } from './subclass.dto';
import { SubclassService } from './subclass.service';
@Controller('subclass')
export class SubclassController {
    constructor(private readonly subclassService: SubclassService) { }
    @Post('add')
    addsubclass(@Body() addsubclass: AddSubclassDto): Promise<any> {
        return this.subclassService.addsubclass(addsubclass);
    }

}