import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PlaneDocument = HydratedDocument<Plane>;

@Schema({timestamps: true })
export class Plane {

    @Prop()
    name: string;

    @Prop(raw({
        first: {type: 'number'},
        business: {type: 'number'},
        premiumEconomic: {type: 'number'},
        economic: {type: 'number'},
    }))
    seats: Record<string, number>;

    @Prop({default: 1})
    active: number;

    @Prop()
    company: string;

    @Prop()
    deletedAt: string;


}

export const PlaneSchema = SchemaFactory.createForClass(Plane);