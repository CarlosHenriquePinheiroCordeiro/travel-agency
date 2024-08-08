import { Test, TestingModule } from '@nestjs/testing';
import { TravelService } from '../../../src/travel/travel.service';
import { TravelController } from '../../../src/travel/travel.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Travel } from '../../../src/travel/schemas/travel.schema';

export const getTravelModuleTest = async (): Promise<TestingModule> => {
  const module = await Test.createTestingModule({
    controllers: [TravelController],
    providers: [
      TravelService,
      {
        provide: getModelToken(Travel.name),
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
