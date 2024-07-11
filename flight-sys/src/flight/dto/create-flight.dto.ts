import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsUUID, ValidateNested } from "class-validator";
import { FlightPriceDto } from "./flight-price.dto";
import { FlightType } from "../schemas/flight.schema";
import { IsObjectId } from "src/decorators/is-object-id.decorator";

export class CreateFlightDto {

    @IsNotEmpty()
    @IsObjectId()
    travelId: string;

    @IsNotEmpty()
    planeId: string;

    @IsNotEmpty()
    airpTakeoffId: string;

    @IsNotEmpty()
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
