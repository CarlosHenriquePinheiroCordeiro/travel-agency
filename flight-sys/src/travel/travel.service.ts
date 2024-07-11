import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/default.service';
import { Travel } from './schemas/travel.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TravelService extends DefaultService {

  constructor(@InjectModel(Travel.name) private travelModel: Model<Travel>) {
    super(travelModel);
  }

  
}
