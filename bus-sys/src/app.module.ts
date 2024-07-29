import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BusModule } from './bus/bus.module';
import { StationModule } from './station/station.module';
import { TripModule } from './trip/trip.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true
      })],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGOURI')
      }),
      inject: [ConfigService]
    }),
    BusModule,
    StationModule,
    TripModule,
    TicketModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
