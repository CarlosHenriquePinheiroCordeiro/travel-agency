import { Prop } from "@nestjs/mongoose";

export const getOptionsSchema = (): Object => ({ timestamps: true })

export abstract class DefaultSchema {

    @Prop()
    deletedAt: string;


}