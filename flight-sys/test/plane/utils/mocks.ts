import { validateOrReject } from 'class-validator';
import { CreatePlaneDto } from '../../../src/plane/dto/create-plane.dto';
import { UpdatePlaneDto } from '../../../src/plane/dto/update-plane.dto';
import { plainToInstance } from 'class-transformer';
import { PlaneClassInfoDto } from '../../../src/plane/dto/plane-class-info.dto';

interface OptionsPlaneMock {
  name?: string;
  company?: string;
  seats?: PlaneClassInfoDto;
}

export interface OptionsPlaneClassInfoMock {
  first?: number;
  business?: number;
  premiumEconomic?: number;
  economic?: number;
}

export const newCreatePlaneMock = async ({
  name = 'Test Plane',
  company = 'TEST',
  seats = null,
}: OptionsPlaneMock = {}): Promise<CreatePlaneDto> => {
  if (!seats) {
    seats = await newPlaneClassInfoMock();
  }
  const mock = plainToInstance(CreatePlaneDto, {
    name,
    company,
    seats,
  });

  await validateOrReject(mock);
  return mock;
};

export const newUpdatePlaneMock = async (
  name = 'Test Plane',
  company = 'TEST',
  seats = null,
): Promise<UpdatePlaneDto> => {
  if (!seats) {
    seats = await newPlaneClassInfoMock();
  }
  const mock = plainToInstance(UpdatePlaneDto, {
    name,
    company,
    seats,
  });
  await validateOrReject(mock);
  return mock;
};

export const newPlaneClassInfoMock = async ({
  first = 3,
  business = 2.5,
  premiumEconomic = 2,
  economic = 1.5,
}: OptionsPlaneClassInfoMock = {}): Promise<PlaneClassInfoDto> => {
  const mock = plainToInstance(PlaneClassInfoDto, {
    first,
    business,
    premiumEconomic,
    economic,
  });
  await validateOrReject(mock);
  return mock;
};
