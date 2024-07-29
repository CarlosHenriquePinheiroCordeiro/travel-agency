import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trip } from './schemas/trip.schema';
import { Model } from 'mongoose';
import { Bus } from 'src/bus/schemas/bus.schema';
import { Station } from 'src/station/schemas/station.schema';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { ActiveService } from 'src/active.service';
import { BusService } from 'src/bus/bus.service';
import { StationService } from 'src/station/station.service';

@Injectable()
export class TripService extends ActiveService {

  constructor(
    @InjectModel(Trip.name) private tripModel: Model<Trip>,
    private readonly busService: BusService,
    private readonly stationService: StationService
  ) {
    super(tripModel);
  }

  async create(createDto) {
    const tripData: CreateTripDto = {...createDto}
    await this.isValidInsert(tripData);
    await this.isEntitiesExists(tripData);
    const newModel = new this.tripModel(tripData);
    const result = await newModel.save();
    return result;
  }

  async isEntitiesExists(tripData: CreateTripDto | UpdateTripDto) {
    if (tripData.busId) {
      await this.busService.findById(tripData.busId);
    }
    if (tripData.stationDepartalId) {
      await this.stationService.findById(tripData.stationDepartalId);
    }
    if (tripData.stationArrivalId) {
      await this.stationService.findById(tripData.stationArrivalId);
    }
  }

  protected async isValidInsert(insertData: any): Promise<boolean> {
    return this.isTripDatesValid(insertData.departal, insertData.arrival);
  }

  protected async isValidUpdate(updateData: any): Promise<boolean> {
    return this.isTripDatesValid(updateData.departal, updateData.arrival);
  }

  protected isTripDatesValid(departalDate, arrivalDate) {
    if (!!departalDate && !!arrivalDate && new Date(departalDate) > new Date(arrivalDate)) {
      throw new BadRequestException(`Departal date (${departalDate}) cannot be greater than arrival date (${arrivalDate})`);
    }
    return true;
  }


}
