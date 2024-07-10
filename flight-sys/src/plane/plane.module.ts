import { Module } from '@nestjs/common';
import { PlaneService } from './plane.service';
import { PlaneController } from './plane.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plane, PlaneSchema } from './schemas/plane.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Plane.name, schema: PlaneSchema}])],
  controllers: [PlaneController],
  providers: [PlaneService],
})
export class PlaneModule {}
