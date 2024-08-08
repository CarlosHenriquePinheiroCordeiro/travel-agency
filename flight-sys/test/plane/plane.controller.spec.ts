import { CreatePlaneDto } from '../../src/plane/dto/create-plane.dto';
import { UpdatePlaneDto } from '../../src/plane/dto/update-plane.dto';
import { PlaneController } from '../../src/plane/plane.controller';
import { PlaneService } from '../../src/plane/plane.service';
import { getPlaneModuleTest } from './utils/get-plane-module-test';
import { newCreatePlaneMock, newUpdatePlaneMock } from './utils/mocks';

describe('PlaneController', () => {
  let controller: PlaneController;
  let service: PlaneService;

  beforeEach(async () => {
    const module = await getPlaneModuleTest();

    controller = module.get<PlaneController>(PlaneController);
    service = module.get<PlaneService>(PlaneService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an plane', async () => {
      const createPlaneDto: CreatePlaneDto = await newCreatePlaneMock();
      const result = { ...createPlaneDto, _id: '1' };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createPlaneDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of planes', async () => {
      const result = [
        {
          name: 'Test Plane',
          international: true,
          city: 'Test City',
          state: 'Test State',
          country: 'TST',
          active: true,
          _id: '1',
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('findAllActive', () => {
    it('should return an array of active planes', async () => {
      const result = [
        {
          name: 'Test Plane',
          international: true,
          city: 'Test City',
          state: 'Test State',
          country: 'TST',
          active: true,
          _id: '1',
        },
      ];
      jest.spyOn(service, 'findAllActive').mockResolvedValue(result);

      expect(await controller.findAllActive()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single plane', async () => {
      const result = {
        name: 'Test Plane',
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
    it('should update an plane', async () => {
      const updatePlaneDto: UpdatePlaneDto = await newUpdatePlaneMock();
      const result = { ...updatePlaneDto, _id: '1' };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('1', updatePlaneDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove an plane', async () => {
      const result = { _id: '1', name: 'Test Plane' };
      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove('1')).toEqual(result);
    });
  });
});
