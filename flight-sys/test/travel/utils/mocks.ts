import { validateOrReject } from 'class-validator';
import { CreateTravelDto } from '../../../src/travel/dto/create-travel.dto';
import { UpdateTravelDto } from '../../../src/travel/dto/update-travel.dto';
import { plainToInstance } from 'class-transformer';

interface OptionsTravelMock {
  name?: string;
}

export const newCreateTravelMock = async ({
  name = 'Test Travel',
}: OptionsTravelMock = {}): Promise<CreateTravelDto> => {
  const mock = plainToInstance(CreateTravelDto, {
    name,
  });

  await validateOrReject(mock);
  return mock;
};

export const newUpdateTravelMock = async ({
  name = 'Test Travel',
}: OptionsTravelMock = {}): Promise<UpdateTravelDto> => {
  const mock = plainToInstance(UpdateTravelDto, {
    name,
  });
  await validateOrReject(mock);
  return mock;
};
