import { CreateTravelDto } from '../../src/travel/dto/create-travel.dto';
import { UpdateTravelDto } from '../../src/travel/dto/update-travel.dto';
import { TravelController } from '../../src/travel/travel.controller';
import { TravelService } from '../../src/travel/travel.service';
import { getTravelModuleTest } from './utils/get-travel-module-test';
import { newCreateTravelMock, newUpdateTravelMock } from './utils/mocks';

describe('TravelController', () => {
  let controller: TravelController;
  let service: TravelService;

  beforeEach(async () => {
    const module = await getTravelModuleTest();

    controller = module.get<TravelController>(TravelController);
    service = module.get<TravelService>(TravelService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an travel', async () => {
      const createTravelDto: CreateTravelDto = await newCreateTravelMock();
      const result = { ...createTravelDto, _id: '1' };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createTravelDto)).toEqual(result);
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

      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single travel', async () => {
      const result = {
        name: 'Test Travel',
        _id: '1',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update an travel', async () => {
      const updateTravelDto: UpdateTravelDto = await newUpdateTravelMock();
      const result = { ...updateTravelDto, _id: '1' };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('1', updateTravelDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove an travel', async () => {
      const result = { _id: '1', name: 'Test Travel' };
      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove('1')).toEqual(result);
    });
  });
});
