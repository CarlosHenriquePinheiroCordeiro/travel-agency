import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Flight } from './schemas/flight.schema';
import { Model } from 'mongoose';
import { Plane } from 'src/plane/schemas/plane.schema';
import { Airport } from 'src/airport/schemas/airport.schema';
import { CreateFlightDto } from './dto/create-flight.dto';
import { Travel } from 'src/travel/schemas/travel.schema';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { ActiveService } from 'src/active.service';

@Injectable()
export class FlightService extends ActiveService {

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
    this.isValidInsert(flightData);
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

  protected isValidInsert(insertData: any) {
    return this.isFlightDatesValid(insertData.takeoff, insertData.landing);
  }

  protected isValidUpdate(updateData: any) {
    return this.isFlightDatesValid(updateData.takeoff, updateData.landing);
  }

  protected isFlightDatesValid(takeoffDate, landingDate) {
    if (!!takeoffDate && !!landingDate && new Date(takeoffDate) > new Date(landingDate)) {
      throw new BadRequestException(`Takeoff date (${takeoffDate}) cannot be greater than landing date (${landingDate})`);
    }
    return true;
  }


}
