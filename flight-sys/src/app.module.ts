import { Module } from '@nestjs/common';
import { PlaneModule } from './plane/plane.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AirportModule } from './airport/airport.module';
import { FlightModule } from './flight/flight.module';
import { TravelModule } from './travel/travel.module';
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
    PlaneModule,
    AirportModule,
    FlightModule,
    TravelModule,
    TicketModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
