import { DefaultService } from './default.service';

export abstract class ActiveService extends DefaultService {
  async findAllActive() {
    const data = await this.model.find({ active: 1 });
    return data;
  }

  protected setDataRemove(data) {
    super.setDataRemove(data);
    data.set('active', 0);
  }

  protected getPropertiesFindById(id: string): NonNullable<unknown> {
    const prop = super.getPropertiesFindById(id);
    return Object.assign(prop, { active: 1 });
  }
}
