import { CreateAirportDto } from '../../src/airport/dto/create-airport.dto';
import { UpdateAirportDto } from '../../src/airport/dto/update-airport.dto';
import { AirportController } from '../../src/airport/airport.controller';
import { AirportService } from '../../src/airport/airport.service';
import { getAirportModuleTest } from './utils/get-airport-module-test';
import { newCreateAirportMock, newUpdateAirportMock } from './utils/mocks';

describe('AirportController', () => {
  let controller: AirportController;
  let service: AirportService;

  beforeEach(async () => {
    const module = await getAirportModuleTest();

    controller = module.get<AirportController>(AirportController);
    service = module.get<AirportService>(AirportService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an airport', async () => {
      const createAirportDto: CreateAirportDto = newCreateAirportMock();
      const result = { ...createAirportDto, _id: '1' };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createAirportDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of airports', async () => {
      const result = [
        {
          name: 'Test Airport',
          international: true,
          city: 'Test City',
          state: 'Test State',
          country: 'Test Country',
          _id: '1',
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single airport', async () => {
      const result = {
        name: 'Test Airport',
        international: true,
        city: 'Test City',
        state: 'Test State',
        country: 'Test Country',
        _id: '1',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update an airport', async () => {
      const updateAirportDto: UpdateAirportDto = newUpdateAirportMock();
      const result = { ...updateAirportDto, _id: '1' };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('1', updateAirportDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove an airport', async () => {
      const result = { _id: '1', name: 'Test Airport' };
      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove('1')).toEqual(result);
    });
  });
});
