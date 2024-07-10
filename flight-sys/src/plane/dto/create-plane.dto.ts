import { IsNotEmpty, IsString, IsUppercase, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PlaneSeatsDto } from "./plane-seats.dto";

export class CreatePlaneDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @ValidateNested()
    @Type(() => PlaneSeatsDto)
    seats: PlaneSeatsDto;

    @IsString()
    @IsNotEmpty()
    @IsUppercase()
    company: string;
}
