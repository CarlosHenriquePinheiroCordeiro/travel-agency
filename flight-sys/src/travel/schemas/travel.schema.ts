import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DefaultSchema, getOptionsSchema } from '../../schemas/default.schema';

export type TravelDocument = HydratedDocument<Travel>;

@Schema(getOptionsSchema())
export class Travel extends DefaultSchema {
  @Prop()
  name: string;
}

export const TravelSchema = SchemaFactory.createForClass(Travel);
