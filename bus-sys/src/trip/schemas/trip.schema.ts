import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, SchemaTypeOptions, SchemaTypes, mongo } from "mongoose";
import { ActiveSchema } from "src/schemas/active.schema";

export type TripDocument = HydratedDocument<Trip>;

export enum TripStatus {
    PENDING = 0,
    CONFIRMED = 1,
    IN_PROGRESS = 2,
    DONE = 3
}

@Schema({timestamps: true })
export class Trip extends ActiveSchema {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Bus'})
    busId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Station'})
    stationDepartalId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Station'})
    stationArrivalId: string;

    @Prop({ type: mongoose.Schema.Types.Date })
    departal: string;

    @Prop({ type: mongoose.Schema.Types.Date })
    alive: string;

    @Prop({default: TripStatus.PENDING})
    status: number;

}

export const TripSchema = SchemaFactory.createForClass(Trip);