import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class PlaneClassInfoDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    first: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    business: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    premiumEconomic: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    economic: number;
}