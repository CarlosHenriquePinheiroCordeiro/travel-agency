import { Test, TestingModule } from '@nestjs/testing';
import { PlaneService } from '../../../src/plane/plane.service';
import { PlaneController } from '../../../src/plane/plane.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Plane } from '../../../src/plane/schemas/plane.schema';

export const getPlaneModuleTest = async (): Promise<TestingModule> => {
  const module = await Test.createTestingModule({
    controllers: [PlaneController],
    providers: [
      PlaneService,
      {
        provide: getModelToken(Plane.name),
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
