import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Timestamp } from "mongodb";
import { HydratedDocument } from "mongoose";

export type PlaneDocument = HydratedDocument<Plane>;

@Schema({timestamps: true})
export class Plane {

    @Prop()
    name: string;

    @Prop()
    active: number;

    @Prop(raw({
        first: {type: 'number'},
        business: {type: 'number'},
        premiumEconomic: {type: 'number'},
        economic: {type: 'number'},
    }))
    seats: Record<string, number>;

    @Prop({default: 1})
    status: number;

    @Prop()
    company: string;

    @Prop()
    deletedAt: string;
}

export const PlaneSchema = SchemaFactory.createForClass(Plane);