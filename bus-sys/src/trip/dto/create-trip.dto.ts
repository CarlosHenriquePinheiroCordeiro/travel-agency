import { IsDateString, IsEnum, IsNotEmpty } from "class-validator";
import { IsObjectId } from "src/decorators/is-object-id.decorator";
import { TripStatus } from "../schemas/trip.schema";

export class CreateTripDto {

    @IsNotEmpty()
    @IsObjectId()
    busId: string;

    @IsNotEmpty()
    @IsObjectId()
    stationDepartalId: string;

    @IsNotEmpty()
    @IsObjectId()
    stationArrivalId: string;

    @IsNotEmpty()
    departal: string;

    @IsDateString()
    @IsNotEmpty()
    arrival: string;

    @IsNotEmpty()
    @IsEnum(TripStatus)
    status: TripStatus;


}
