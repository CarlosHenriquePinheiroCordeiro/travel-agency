import { IsBoolean, IsNotEmpty, IsString, IsUppercase, ValidateNested } from "class-validator";

export class CreateAirportDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    @IsNotEmpty()
    international: boolean;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    @IsUppercase()
    country: string;

}
