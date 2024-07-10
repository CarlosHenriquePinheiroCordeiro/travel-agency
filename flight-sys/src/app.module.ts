import { Module } from '@nestjs/common';
import { PlaneModule } from './plane/plane.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        //uri: configService.get<string>('MONGODB_URI')
        uri: 'mongodb+srv://adm:adm@travelagencyapi.emffmx1.mongodb.net/?retryWrites=true&w=majority&appName=TravelAgencyApi'
      }),
      inject: [ConfigService]
    }),
    PlaneModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
