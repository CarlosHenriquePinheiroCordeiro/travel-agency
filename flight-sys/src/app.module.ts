import { Module } from '@nestjs/common';
import { PlaneModule } from './plane/plane.module';

@Module({
  imports: [PlaneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
