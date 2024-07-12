import { IsNotEmpty, IsNumber, Min } from "class-validator";

export enum PlaneClassEnum {
    FIRST = 1,
    BUSINESS = 2,
    PREMIUM_ECONOMIC = 3,
    ECONOMIC = 4
}

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