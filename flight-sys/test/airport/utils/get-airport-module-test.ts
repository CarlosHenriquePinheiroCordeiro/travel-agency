import { Test, TestingModule } from '@nestjs/testing';
import { AirportService } from '../../../src/airport/airport.service';
import { AirportController } from '../../../src/airport/airport.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Airport } from '../../../src/airport/schemas/airport.schema';

export const getAirportModuleTest = async (): Promise<TestingModule> => {
  const module = await Test.createTestingModule({
    controllers: [AirportController],
    providers: [
      AirportService,
      {
        provide: getModelToken(Airport.name),
        useValue: {
          create: jest.fn(),
          findAll: jest.fn(),
          findOne: jest.fn(),
          update: jest.fn(),
          remove: jest.fn(),
        },
      },
    ],
  }).compile();
  return module;
};
