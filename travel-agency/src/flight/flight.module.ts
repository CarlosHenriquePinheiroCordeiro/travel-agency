import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { AdapterModule } from './adapters/adapter.module';

@Module({
  imports: [ApplicationModule, AdapterModule]
})
export class FlightModule {}
