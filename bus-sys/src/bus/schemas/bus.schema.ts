import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ActiveSchema } from "src/schemas/active.schema";

export type BusDocument = HydratedDocument<Bus>;

export enum BusType {
    CONVENCIONAL = 1,
    EXECUTIVE = 2,
    SEMILEITO = 3,
    LEITO = 4
}

@Schema({timestamps: true })
export class Bus extends ActiveSchema {
    
    @Prop()
    name: string;

    @Prop()
    seats: number;

    @Prop()
    type: number;

    @Prop(raw({
        distance: {type: 'number'},
        service: {type: 'number'}
    }))
    prices: Record<string, number>;

    @Prop()
    company: string;

}

export const BusSchema = SchemaFactory.createForClass(Bus);