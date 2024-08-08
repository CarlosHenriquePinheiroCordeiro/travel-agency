import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { ActiveController } from '../../src/active.controller';

@Controller('flight')
export class FlightController extends ActiveController {
  constructor(private readonly flightService: FlightService) {
    super(flightService);
  }

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.create(createFlightDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
    return this.flightService.update(id, updateFlightDto);
  }
}
