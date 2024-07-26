import { Injectable } from '@nestjs/common';
import { ActiveService } from 'src/active.service';
import { InjectModel } from '@nestjs/mongoose';
import { Station } from './schemas/station.schema';
import { Model } from 'mongoose';

@Injectable()
export class StationService extends ActiveService {

  constructor(@InjectModel(Station.name) private busModel: Model<Station>) {
    super(busModel);
  }

}
