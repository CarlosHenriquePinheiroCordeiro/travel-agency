import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ActiveSchema } from "src/schemas/active.schema";

export type StationDocument = HydratedDocument<Station>;

@Schema({timestamps: true })
export class Station extends ActiveSchema {
    
    @Prop()
    name: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    country: string;


}

export const StationSchema = SchemaFactory.createForClass(Station);