import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaneDto } from './dto/create-plane.dto';
import { UpdatePlaneDto } from './dto/update-plane.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Plane } from './schemas/plane.schema';
import { Model } from 'mongoose';
import { DefaultService } from 'src/default.service';

@Injectable()
export class PlaneService extends DefaultService {

  constructor(@InjectModel(Plane.name) private planeModel: Model<Plane>) {
    super(planeModel);
  }


}
