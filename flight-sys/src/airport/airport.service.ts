import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Airport } from './schemas/airport.schema';
import { Model } from 'mongoose';
import { ActiveService } from '../active.service';

@Injectable()
export class AirportService extends ActiveService {
  constructor(@InjectModel(Airport.name) private airportModel: Model<Airport>) {
    super(airportModel);
  }
}
