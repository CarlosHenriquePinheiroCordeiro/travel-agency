import { Module } from '@nestjs/common';
import { ListenerController } from './listener.controller';
import { EmitterService } from 'src/emitter/emitter.service';

@Module({
  controllers: [ListenerController],
  providers: [EmitterService],
})
export class ListenerModule {}
