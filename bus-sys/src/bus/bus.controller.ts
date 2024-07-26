import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { ActiveController } from 'src/active.controller';

@Controller('bus')
export class BusController extends ActiveController {
  constructor(private readonly busService: BusService) {
    super(busService);
  }

  @Post()
  create(@Body() createBusDto: CreateBusDto) {
    return this.busService.create(createBusDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusDto: UpdateBusDto) {
    return this.busService.update(id, updateBusDto);
  }


}
