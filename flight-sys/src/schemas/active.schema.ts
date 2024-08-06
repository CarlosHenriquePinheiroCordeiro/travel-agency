import { Prop } from '@nestjs/mongoose';
import { DefaultSchema } from './default.schema';

export abstract class ActiveSchema extends DefaultSchema {
  @Prop({ default: 1 })
  active: number;
}
