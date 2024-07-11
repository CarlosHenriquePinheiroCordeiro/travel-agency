import { NotFoundException } from "@nestjs/common";

export abstract class DefaultService {
  constructor(private model) {}

  async create(createDto) {
    const newModel = new this.model(createDto);
    const result = await newModel.save();
    return result;
  }

  async findAll() {
    const data = await this.model.find();
    return data;
  }

  async findAllActive() {
    const data = await this.model.find({'active': 1});
    return data;
  }

  async findOne(id: string) {
    return this.model.findById(id);
  }

  async update(id: string, updateDto) {
    const data = await this.findById(id);
    Object.assign(data, updateDto);
    await data.save();
    return data;
  }

  async remove(id: string) {
    const data = await this.findById(id);
    data.set('active', 0);
    data.set('deletedAt', new Date().toISOString());
    const result = await data.save();
    return result;
  }

  protected async findById(id: string, throwError: boolean = true) {
    const result = await this.model.findOne({'_id': id, 'active': 1});
    if (!result && throwError) throw new NotFoundException(`Object with ${id} not found`)
    return result;
  }


}