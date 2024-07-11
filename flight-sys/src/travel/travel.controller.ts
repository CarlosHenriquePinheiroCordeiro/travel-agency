import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { DefaultController } from 'src/default.controller';

@Controller('travel')
export class TravelController extends DefaultController {
  constructor(private readonly travelService: TravelService) {
    super(travelService);
  }

  @Get()
  findAllActive() {
      return this.findAll();
  }

  @Post()
  create(@Body() createTravelDto: CreateTravelDto) {
    return this.travelService.create(createTravelDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTravelDto: UpdateTravelDto) {
    return this.travelService.update(id, updateTravelDto);
  }


}
