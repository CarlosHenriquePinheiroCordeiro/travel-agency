import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Flight } from './schemas/flight.schema';
import { Model } from 'mongoose';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { ActiveService } from '../active.service';
import { TravelService } from '../travel/travel.service';
import { PlaneService } from '../plane/plane.service';
import { AirportService } from '../airport/airport.service';

@Injectable()
export class FlightService extends ActiveService {
  constructor(
    @InjectModel(Flight.name) private flightModel: Model<Flight>,
    private readonly planeService: PlaneService,
    private readonly airportService: AirportService,
    private readonly travelService: TravelService,
  ) {
    super(flightModel);
  }

  async create(createDto) {
    const flightData: CreateFlightDto = { ...createDto };
    await this.isValidInsert(flightData);
    await this.isEntitiesExists(flightData);
    const newModel = new this.flightModel(flightData);
    const result = await newModel.save();
    return result;
  }

  async isEntitiesExists(flightData: CreateFlightDto | UpdateFlightDto) {
    if (flightData.travelId) {
      await this.travelService.findById(flightData.travelId);
    }
    if (flightData.planeId) {
      await this.planeService.findById(flightData.planeId);
    }
    if (flightData.airpTakeoffId) {
      await this.airportService.findById(flightData.airpTakeoffId);
    }
    if (flightData.airpLandingId) {
      await this.airportService.findById(flightData.airpLandingId);
    }
  }

  protected async isValidInsert(insertData: any): Promise<boolean> {
    return this.isFlightDatesValid(insertData.takeoff, insertData.landing);
  }

  protected async isValidUpdate(updateData: any): Promise<boolean> {
    return this.isFlightDatesValid(updateData.takeoff, updateData.landing);
  }

  protected isFlightDatesValid(takeoffDate, landingDate) {
    if (
      !!takeoffDate &&
      !!landingDate &&
      new Date(takeoffDate) > new Date(landingDate)
    ) {
      throw new BadRequestException(
        `Takeoff date (${takeoffDate}) cannot be greater than landing date (${landingDate})`,
      );
    }
    return true;
  }
}
