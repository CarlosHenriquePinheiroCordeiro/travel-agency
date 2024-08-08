import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plane } from './schemas/plane.schema';
import { Model } from 'mongoose';
import { ActiveService } from '../active.service';

@Injectable()
export class PlaneService extends ActiveService {
  constructor(@InjectModel(Plane.name) private planeModel: Model<Plane>) {
    super(planeModel);
  }
}
