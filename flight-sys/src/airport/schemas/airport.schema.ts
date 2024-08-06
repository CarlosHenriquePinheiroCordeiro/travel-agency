import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ActiveSchema } from "../../schemas/active.schema";
import { getOptionsSchema } from "../../schemas/default.schema";

export type AirportDocument = HydratedDocument<Airport>;

@Schema(getOptionsSchema())
export class Airport extends ActiveSchema {

    @Prop()
    name: string;

    @Prop()
    international: boolean;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    country: string;
    

}

export const AirportSchema = SchemaFactory.createForClass(Airport);