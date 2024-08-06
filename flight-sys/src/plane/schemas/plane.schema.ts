import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ActiveSchema } from 'src/schemas/active.schema';
import { getOptionsSchema } from 'src/schemas/default.schema';

export type PlaneDocument = HydratedDocument<Plane>;

@Schema(getOptionsSchema())
export class Plane extends ActiveSchema {
  @Prop()
  name: string;

  @Prop(
    raw({
      first: { type: 'number' },
      business: { type: 'number' },
      premiumEconomic: { type: 'number' },
      economic: { type: 'number' },
    }),
  )
  seats: Record<string, number>;

  @Prop(
    raw({
      distance: { type: 'object' },
      service: { type: 'object' },
    }),
  )
  prices: Record<string, number>;

  @Prop()
  company: string;
}

export const PlaneSchema = SchemaFactory.createForClass(Plane);
