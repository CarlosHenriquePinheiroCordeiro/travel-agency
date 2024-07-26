import { Module } from '@nestjs/common';
import { EmitterService } from './emitter.service';

@Module({
  controllers: [],
  providers: [EmitterService],
})
export class EmitterModule {}
