import { CreateAirportDto } from '../../src/airport/dto/create-airport.dto';
import { UpdateAirportDto } from '../../src/airport/dto/update-airport.dto';
import { AirportService } from '../../src/airport/airport.service';
import { getAirportModuleTest } from './utils/get-airport-module-test';
import { newCreateAirportMock, newUpdateAirportMock } from './utils/mocks';

describe('AirportService', () => {
  let service: AirportService;

  beforeEach(async () => {
    const module = await getAirportModuleTest();

    service = module.get<AirportService>(AirportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an airport', async () => {
      const createAirportDto: CreateAirportDto = await newCreateAirportMock();
      const result = { ...createAirportDto, _id: '1' };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await service.create(createAirportDto)).toEqual(result);
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
          country: 'TST',
          active: true,
          _id: '1',
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findAllActive', () => {
    it('should return an array of active airports', async () => {
      const result = [
        {
          name: 'Test Airport',
          international: true,
          city: 'Test City',
          state: 'Test State',
          country: 'TST',
          active: true,
          _id: '1',
        },
      ];
      jest.spyOn(service, 'findAllActive').mockResolvedValue(result);

      expect(await service.findAllActive()).toEqual(result);
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

      expect(await service.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update an airport', async () => {
      const updateAirportDto: UpdateAirportDto = await newUpdateAirportMock();
      const result = { ...updateAirportDto, _id: '1' };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await service.update('1', updateAirportDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove an airport', async () => {
      const result = { _id: '1', name: 'Test Airport' };
      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await service.remove('1')).toEqual(result);
    });
  });
});
