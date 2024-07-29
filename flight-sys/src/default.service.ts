import { NotFoundException } from "@nestjs/common";

export abstract class DefaultService {
  constructor(protected model) {}

  async create(createDto) {
    await this.isValidInsert(createDto);
    const newModel = new this.model(createDto);
    const result = await newModel.save();
    return result;
  }
  
  async findAll() {
    const data = await this.model.find();
    return data;
  }
  
  async findOne(id: string) {
    return this.model.findById(id);
  }
  
  async update(id: string, updateDto) {
    this.isValidUpdate(updateDto);
    const data = await this.findById(id);
    Object.assign(data, updateDto);
    await data.save();
    return data;
  }

  async remove(id: string) {
    const data = await this.findById(id);
    this.setDataRemove(data);
    const result = await data.save();
    return result;
  }

  protected setDataRemove(data) {
    data.set('deletedAt', new Date().toISOString());
  }
  
  async findById(id: string, throwError: boolean = true) {
    const result = await this.model.findOne(this.getPropertiesFindById(id));
    if (!result && throwError) throw new NotFoundException(`Object with ${id} not found`)
    return result;
  }

  protected getPropertiesFindById(id: string): Object {
    return {'_id': id};
  }

  protected async isValidInsert(insertData): Promise<boolean> {
    return true;
  }
  
  protected async isValidUpdate(updateData): Promise<boolean> {
    return true;
  }


}