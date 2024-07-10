import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaneDto } from './dto/create-plane.dto';
import { UpdatePlaneDto } from './dto/update-plane.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Plane } from './schemas/plane.schema';
import { Model } from 'mongoose';

@Injectable()
export class PlaneService {

  constructor(@InjectModel(Plane.name) private planeModel: Model<Plane>) {}

  async create(createPlaneDto: CreatePlaneDto) {
    const newPlane = new this.planeModel(createPlaneDto);
    const result = await newPlane.save();
    return result;
  }

  async findAll() {
    const planes = await this.planeModel.find();
    return planes;
  }

  async findAllActive() {
    const planes = await this.planeModel.find({'active': 1});
    return planes;
  }

  async findOne(id: string) {
    return this.planeModel.findById(id);
  }

  async update(id: string, updatePlaneDto: UpdatePlaneDto) {
    const plane = await this.findById(id);
    Object.assign(plane, updatePlaneDto);
    await plane.save();
    return plane;
  }

  async remove(id: string) {
    const plane = await this.findById(id);
    plane.set('active', 0);
    plane.set('deletedAt', new Date().toISOString());
    const result = await plane.save();
    return result;
  }

  private async findById(id: string, throwError: boolean = true) {
    const result = await this.planeModel.findOne({'_id': id, 'active': 1});
    if (!result && throwError) throw new NotFoundException(`Plane ${id} not found`)
    return result;
  }
}
