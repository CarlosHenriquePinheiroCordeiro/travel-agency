import { Test, TestingModule } from '@nestjs/testing';
import { AirportController } from '../../src/airport/airport.controller';
import { AirportService } from '../../src/airport/airport.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Airport } from '../../src/airport/schemas/airport.schema';
import { newAirportMock } from './schemas/airport-mock';

describe('AirportController', () => {
  let controller: AirportController;
  let service: AirportService;
  let model: Model<Airport>;

  let mockAirport;
  let airportArray;
  let mockAirportModel;

  beforeEach(async () => {
    mockAirport = newAirportMock();

    airportArray = [
      mockAirport,
      newAirportMock('AirportTest2'),
    ];
  
    mockAirportModel = {
      find: jest.fn().mockResolvedValue(airportArray),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirportController],
      providers: [
        AirportService,
        {
          provide: getModelToken(Airport.name),
          useValue: mockAirportModel,
        },
      ],
    }).compile();

    controller = module.get<AirportController>(AirportController);
    service = module.get<AirportService>(AirportService);
    model = module.get<Model<Airport>>(getModelToken(Airport.name));
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return an Airport model', async () => {
    mockAirportModel.findById = jest.fn().mockResolvedValue(mockAirport)

    mockAirport._id = '123';

    const result = await controller.findOne('123');
    expect(result._id).toEqual(mockAirport._id);
    expect(model.findById).toHaveBeenCalled();
  });

  it('Should return an array of Airports', async () => {
    mockAirportModel.find = jest.fn().mockResolvedValue(airportArray);
    
    const result = await controller.findAll();
    expect(result).toEqual(airportArray);
    expect(model.find).toHaveBeenCalled();
  });
});
