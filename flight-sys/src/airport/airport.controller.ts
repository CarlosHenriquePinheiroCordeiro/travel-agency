import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { AirportService } from './airport.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { ActiveController } from '../active.controller';

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
