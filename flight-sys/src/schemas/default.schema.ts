import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export const getOptionsSchema = (): NonNullable<unknown> => ({
  timestamps: true,
});

export abstract class DefaultSchema {
  @Prop({ type: mongoose.Schema.Types.Date })
  deletedAt: string;
}
