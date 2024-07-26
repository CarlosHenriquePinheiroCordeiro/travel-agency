import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bus, BusSchema } from './schemas/bus.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Bus.name, schema: BusSchema},
  ])],
  controllers: [BusController],
  providers: [BusService],
})
export class BusModule {}
