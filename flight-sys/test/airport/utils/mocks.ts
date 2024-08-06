import { validate } from 'class-validator';
import { CreateAirportDto } from '../../../src/airport/dto/create-airport.dto';
import { UpdateAirportDto } from '../../../src/airport/dto/update-airport.dto';

export const newCreateAirportMock = (
  name = 'Test Airport',
  international = true,
  city = 'Test City',
  state = 'Test State',
  country = 'Test Country',
): CreateAirportDto => {
  const mock: CreateAirportDto = {
    name,
    international,
    city,
    state,
    country,
  };
  validate(mock, {
    skipMissingProperties: false,
    skipNullProperties: false,
    skipUndefinedProperties: false,
    always: true,
  });
  return mock;
};

export const newUpdateAirportMock = (): UpdateAirportDto => {
  const mock: UpdateAirportDto = {
    name: 'Test Airport',
    international: true,
    city: 'Test City',
    state: 'Test State',
    country: 'Test Country',
  };
  validate(mock);
  return mock;
};
