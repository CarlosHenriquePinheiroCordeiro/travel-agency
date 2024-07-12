import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirportService } from './airport.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { DefaultController } from 'src/default.controller';
import { ActiveController } from 'src/active.controller';

@Controller('airport')
export class AirportController extends ActiveController {
  constructor(private readonly airportService: AirportService) {
    super(airportService);
  }

  @Post()
  create(@Body() createAirportDto: CreateAirportDto) {
    return this.airportService.create(createAirportDto);  
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirportDto: UpdateAirportDto) {
    return this.airportService.update(id, updateAirportDto);
  }


}
