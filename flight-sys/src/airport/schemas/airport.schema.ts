import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AirportDocument = HydratedDocument<Airport>;

@Schema({timestamps: true, safe: true })
export class Airport {

    @Prop()
    name: string;

    @Prop({default: 1})
    active: number;

    @Prop()
    international: boolean;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    country: string;

    @Prop()
    deletedAt: string;
    

}

export const AirportSchema = SchemaFactory.createForClass(Airport);