import { Test, TestingModule } from '@nestjs/testing';
import { FlightService } from '../../../src/flight/flight.service';
import { FlightController } from '../../../src/flight/flight.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Flight } from '../../../src/flight/schemas/flight.schema';
import { Travel } from '../../../src/travel/schemas/travel.schema';
import { TravelService } from '../../../src/travel/travel.service';
import { AirportService } from '../../../src/airport/airport.service';
import { Airport } from '../../../src/airport/schemas/airport.schema';
import { Plane } from '../../../src/plane/schemas/plane.schema';
import { PlaneService } from '../../../src/plane/plane.service';

export const getFlightModuleTest = async (): Promise<TestingModule> => {
  const module = await Test.createTestingModule({
    controllers: [FlightController],
    providers: getProviders(),
  }).compile();
  return module;
};

const getProviders = () => [
  FlightService,
  {
    provide: getModelToken(Flight.name),
    useValue: {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    },
  },
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
];
