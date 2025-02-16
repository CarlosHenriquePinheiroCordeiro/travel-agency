import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { DefaultSchema, getOptionsSchema } from "src/schemas/default.schema";

export type TravelDocument = HydratedDocument<Travel>;

@Schema(getOptionsSchema())
export class Travel extends DefaultSchema {

    @Prop()
    name: string;


}

export const TravelSchema = SchemaFactory.createForClass(Travel);