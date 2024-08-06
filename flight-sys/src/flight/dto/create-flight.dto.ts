import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { FlightPriceDto } from './flight-price.dto';
import { FlightType } from '../schemas/flight.schema';
import { IsObjectId } from 'src/decorators/is-object-id.decorator';

export class CreateFlightDto {
  @IsNotEmpty()
  @IsObjectId()
  travelId: string;

  @IsNotEmpty()
  @IsObjectId()
  planeId: string;

  @IsNotEmpty()
  @IsObjectId()
  airpTakeoffId: string;

  @IsNotEmpty()
  @IsObjectId()
  airpLandingId: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => FlightPriceDto)
  prices: FlightPriceDto;

  @IsDateString()
  @IsNotEmpty()
  takeoff: string;

  @IsDateString()
  @IsNotEmpty()
  landing: string;

  @IsEnum(FlightType)
  @IsNotEmpty()
  type: FlightType;
}
