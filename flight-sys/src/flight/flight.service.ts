import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/default.service';
import { InjectModel } from '@nestjs/mongoose';
import { Flight } from './schemas/flight.schema';
import { Model } from 'mongoose';
import { Plane } from 'src/plane/schemas/plane.schema';
import { Airport } from 'src/airport/schemas/airport.schema';
import { CreateFlightDto } from './dto/create-flight.dto';
import { Travel } from 'src/travel/schemas/travel.schema';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { todo } from 'node:test';

@Injectable()
export class FlightService extends DefaultService {

  constructor(
    @InjectModel(Flight.name) private flightModel: Model<Flight>,
    @InjectModel(Plane.name) private planeModel: Model<Plane>,
    @InjectModel(Airport.name) private airportModel: Model<Airport>,
    @InjectModel(Travel.name) private travelModel: Model<Travel>,
  ) {
    super(flightModel);
  }

  async create(createDto) {
    const flightData: CreateFlightDto = {...createDto}
    this.isEntitiesExists(flightData);
    const newModel = new this.flightModel(flightData);
    const result = await newModel.save();
    return result;
  }

  async isEntitiesExists(flightData: CreateFlightDto | UpdateFlightDto) {
    /**
     * @todo improve this
     */
    if (flightData.travelId) {
      await this.travelModel.findById(flightData.travelId);
    }
    if (flightData.planeId) {
      await this.planeModel.findById(flightData.planeId);
    }
    if (flightData.airpTakeoffId) {
      await this.airportModel.findById(flightData.airpTakeoffId);
    }
    if (flightData.airpLandingId) {
      await this.airportModel.findById(flightData.airpLandingId);
    }
  }


}
