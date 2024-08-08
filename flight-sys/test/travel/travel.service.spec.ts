import { CreateTravelDto } from '../../src/travel/dto/create-travel.dto';
import { UpdateTravelDto } from '../../src/travel/dto/update-travel.dto';
import { TravelService } from '../../src/travel/travel.service';
import { getTravelModuleTest } from './utils/get-travel-module-test';
import { newCreateTravelMock, newUpdateTravelMock } from './utils/mocks';

describe('TravelService', () => {
  let service: TravelService;

  beforeEach(async () => {
    const module = await getTravelModuleTest();

    service = module.get<TravelService>(TravelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an travel', async () => {
      const createTravelDto: CreateTravelDto = await newCreateTravelMock();
      const result = { ...createTravelDto, _id: '1' };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await service.create(createTravelDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of travels', async () => {
      const result = [
        {
          name: 'Test Travel',
          _id: '1',
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single travel', async () => {
      const result = {
        name: 'Test Travel',
        _id: '1',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await service.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update an travel', async () => {
      const updateTravelDto: UpdateTravelDto = await newUpdateTravelMock();
      const result = { ...updateTravelDto, _id: '1' };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await service.update('1', updateTravelDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove an travel', async () => {
      const result = { _id: '1', name: 'Test Travel' };
      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await service.remove('1')).toEqual(result);
    });
  });
});
