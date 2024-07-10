import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Airport } from './schemas/airport.schema';
import { Model } from 'mongoose';

@Injectable()
export class AirportService {

  constructor(@InjectModel(Airport.name) private airportModel: Model<Airport>) {}

  async create(createAirportDto: CreateAirportDto) {
    const newAirport = new this.airportModel(createAirportDto);
    const result = await newAirport.save();
    return result;
  }

  async findAll() {
    const airports = await this.airportModel.find();
    return airports;
  }

  async findAllActive() {
    const airports = await this.airportModel.find({'active': 1});
    return airports;
  }

  async findOne(id: string) {
    return this.airportModel.findById(id);
  }

  async update(id: string, updateAirportDto: UpdateAirportDto) {
    const airport = await this.findById(id);
    Object.assign(airport, updateAirportDto);
    await airport.save();
    return airport;
  }

  async remove(id: string) {
    const airport = await this.findById(id);
    airport.set('active', 0);
    airport.set('deletedAt', new Date().toISOString());
    const result = await airport.save();
    return result;
  }

  private async findById(id: string, throwError: boolean = true) {
    const result = await this.airportModel.findOne({'_id': id, 'active': 1});
    if (!result && throwError) throw new NotFoundException(`Airport ${id} not found`)
    return result;
  }
}
