import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Airport } from './schemas/airport.schema';
import { Model } from 'mongoose';
import { DefaultService } from 'src/default.service';

@Injectable()
export class AirportService extends DefaultService {

  constructor(@InjectModel(Airport.name) private airportModel: Model<Airport>) {
    super(airportModel);
  }

}
