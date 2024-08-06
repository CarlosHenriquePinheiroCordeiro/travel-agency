import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ActiveSchema } from 'src/schemas/active.schema';

export type FlightDocument = HydratedDocument<Flight>;

export enum FlightType {
  OUTBOUND = 1,
  RETURN = 2,
}

@Schema({ timestamps: true })
export class Flight extends ActiveSchema {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Travel' })
  travelId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Plane' })
  planeId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Airport' })
  airpTakeoffId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Airport' })
  airpLandingId: string;

  @Prop(
    raw({
      distance: { type: 'object' },
      service: { type: 'object' },
    }),
  )
  prices: Record<string, number>;

  @Prop({ type: mongoose.Schema.Types.Date })
  takeoff: string;

  @Prop({ type: mongoose.Schema.Types.Date })
  landing: string;

  @Prop()
  type: number;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
