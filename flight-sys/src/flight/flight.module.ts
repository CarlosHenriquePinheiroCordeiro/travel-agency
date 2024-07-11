import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight, FlightSchema } from './schemas/flight.schema';
import { Plane, PlaneSchema } from 'src/plane/schemas/plane.schema';
import { Airport, AirportSchema } from 'src/airport/schemas/airport.schema';
import { Travel, TravelSchema } from 'src/travel/schemas/travel.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Flight.name, schema: FlightSchema},
    { name: Plane.name, schema: PlaneSchema},
    { name: Airport.name, schema: AirportSchema},
    { name: Travel.name, schema: TravelSchema},
  ])],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
