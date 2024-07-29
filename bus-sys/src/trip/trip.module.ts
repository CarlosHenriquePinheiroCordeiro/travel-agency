import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip, TripSchema } from './schemas/trip.schema';
import { Bus, BusSchema } from 'src/bus/schemas/bus.schema';
import { Station, StationSchema } from 'src/station/schemas/station.schema';
import { BusModule } from 'src/bus/bus.module';
import { BusService } from 'src/bus/bus.service';
import { StationService } from 'src/station/station.service';

@Module({
  imports: [MongooseModule.forFeature([
      { name: Trip.name, schema: TripSchema },
      { name: Bus.name, schema: BusSchema },
      { name: Station.name, schema: StationSchema },
    ]),
  ],
  controllers: [TripController],
  providers: [TripService, BusService, StationService],
})
export class TripModule {}
