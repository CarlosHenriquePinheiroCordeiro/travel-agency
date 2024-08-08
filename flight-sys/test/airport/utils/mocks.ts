import { validateOrReject } from 'class-validator';
import { CreateAirportDto } from '../../../src/airport/dto/create-airport.dto';
import { UpdateAirportDto } from '../../../src/airport/dto/update-airport.dto';
import { plainToInstance } from 'class-transformer';

interface OptionsAirportMock {
  name?: string;
  international?: boolean;
  city?: string;
  state?: string;
  country?: string;
}

export const newCreateAirportMock = async ({
  name = 'Test Airport',
  international = true,
  city = 'Test City',
  state = 'Test State',
  country = 'TST',
}: OptionsAirportMock = {}): Promise<CreateAirportDto> => {
  const mock = plainToInstance(CreateAirportDto, {
    name,
    international,
    city,
    state,
    country,
  });

  await validateOrReject(mock);
  return mock;
};

export const newUpdateAirportMock = async ({
  name = 'Test Airport',
  international = true,
  city = 'Test City',
  state = 'Test State',
  country = 'TST',
}: OptionsAirportMock = {}): Promise<UpdateAirportDto> => {
  const mock = plainToInstance(UpdateAirportDto, {
    name,
    international,
    city,
    state,
    country,
  });
  await validateOrReject(mock);
  return mock;
};
