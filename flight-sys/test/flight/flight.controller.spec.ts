import { CreateFlightDto } from '../../src/flight/dto/create-flight.dto';
import { UpdateFlightDto } from '../../src/flight/dto/update-flight.dto';
import { FlightController } from '../../src/flight/flight.controller';
import { FlightService } from '../../src/flight/flight.service';
import { getFlightModuleTest } from './utils/get-flight-module-test';
import { newCreateFlightMock, newUpdateFlightMock } from './utils/mocks';

describe('FlightController', () => {
  let controller: FlightController;
  let service: FlightService;

  beforeEach(async () => {
    const module = await getFlightModuleTest();

    controller = module.get<FlightController>(FlightController);
    service = module.get<FlightService>(FlightService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an flight', async () => {
      const createFlightDto: CreateFlightDto = await newCreateFlightMock({
        travelId: '1',
        airpLandingId: '1',
        airpTakeoffId: '1',
        planeId: '1',
      });
      console.log(createFlightDto);
      const result = { ...createFlightDto, _id: '1' };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createFlightDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of flights', async () => {
      const result = [
        {
          name: 'Test Flight',
          _id: '1',
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single flight', async () => {
      const result = {
        name: 'Test Flight',
        _id: '1',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update an flight', async () => {
      const updateFlightDto: UpdateFlightDto = await newUpdateFlightMock();
      const result = { ...updateFlightDto, _id: '1' };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('1', updateFlightDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove an flight', async () => {
      const result = { _id: '1', name: 'Test Flight' };
      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove('1')).toEqual(result);
    });
  });
});
