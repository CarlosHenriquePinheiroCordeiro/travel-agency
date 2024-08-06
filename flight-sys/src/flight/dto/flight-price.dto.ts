import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { PlaneClassInfoDto } from '../../plane/dto/plane-class-info.dto';

export class FlightPriceDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PlaneClassInfoDto)
  distance: PlaneClassInfoDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PlaneClassInfoDto)
  service: PlaneClassInfoDto;
}
