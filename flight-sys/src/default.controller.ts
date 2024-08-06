import { Delete, Get, Param } from '@nestjs/common';
import { DefaultService } from './default.service';

export abstract class DefaultController {
  constructor(private readonly service: DefaultService) {}

  @Get('all')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
