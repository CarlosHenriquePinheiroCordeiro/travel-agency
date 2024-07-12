import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { DefaultSchema } from "src/schemas/default.schema";

export type TicketDocument = HydratedDocument<Ticket>;

@Schema({timestamps: true })
export class Ticket extends DefaultSchema {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Flight'})
    flightId: string;

    @Prop()
    owner: string;

    @Prop()
    document: string

    @Prop()
    email: string;

    @Prop()
    birthDate: string;

    @Prop()
    class: number;

}

export const TicketSchema = SchemaFactory.createForClass(Ticket);