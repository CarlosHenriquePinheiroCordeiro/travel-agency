import { Injectable } from '@nestjs/common';
import { ActiveService } from 'src/active.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bus } from './schemas/bus.schema';

@Injectable()
export class BusService extends ActiveService {

  constructor(@InjectModel(Bus.name) private busModel: Model<Bus>) {
    super(busModel);
  }


}
