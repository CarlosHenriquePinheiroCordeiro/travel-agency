import { validateOrReject } from 'class-validator';
import { CreateFlightDto } from '../../../src/flight/dto/create-flight.dto';
import { UpdateFlightDto } from '../../../src/flight/dto/update-flight.dto';
import { plainToInstance } from 'class-transformer';
import { FlightPriceDto } from '../../../src/flight/dto/flight-price.dto';
import { FlightType } from '../../../src/flight/schemas/flight.schema';
import { PlaneClassInfoDto } from '../../../src/plane/dto/plane-class-info.dto';
import { newPlaneClassInfoMock } from '../../../test/plane/utils/mocks';
import mongoose from 'mongoose';

interface OptionsFlightMock {
  travelId: { _id: mongoose.Types.ObjectId };
  planeId: { _id: mongoose.Types.ObjectId };
  airpTakeoffId: { _id: mongoose.Types.ObjectId };
  airpLandingId: { _id: mongoose.Types.ObjectId };
  prices?: FlightPriceDto;
  takeoff?: string;
  landing?: string;
  type?: FlightType;
}

interface OptionsFlightPricesMock {
  distance?: PlaneClassInfoDto;
  service?: PlaneClassInfoDto;
}

export const newCreateFlightMock = async ({
  travelId,
  planeId,
  airpTakeoffId,
  airpLandingId,
  prices = null,
  takeoff = '2024-01-01 00:00:00',
  landing = '2024-01-02 00:00:00',
  type = FlightType.OUTBOUND,
}: OptionsFlightMock): Promise<CreateFlightDto> => {
  if (!prices) {
    prices = await newFlightPriceMock();
  }
  const mock = plainToInstance(CreateFlightDto, {
    travelId,
    planeId,
    airpTakeoffId,
    airpLandingId,
    prices,
    takeoff,
    landing,
    type,
  });

  await validateOrReject(mock);
  return mock;
};

export const newUpdateFlightMock = async (
  name = 'Test Flight',
): Promise<UpdateFlightDto> => {
  const mock = plainToInstance(UpdateFlightDto, {
    name,
  });
  await validateOrReject(mock);
  return mock;
};

export const newFlightPriceMock = async ({
  distance = null,
  service = null,
}: OptionsFlightPricesMock = {}): Promise<FlightPriceDto> => {
  if (!distance) {
    distance = await newPlaneClassInfoMock();
  }
  if (!service) {
    service = await newPlaneClassInfoMock();
  }
  const mock = plainToInstance(FlightPriceDto, { distance, service });
  await validateOrReject(mock);
  return mock;
};
