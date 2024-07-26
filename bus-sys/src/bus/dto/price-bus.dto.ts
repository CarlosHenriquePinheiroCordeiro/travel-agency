import { IsNotEmpty, IsNumber } from "class-validator";

export class PriceBusDto {

    @IsNotEmpty()
    @IsNumber()
    distance: number;

    @IsNotEmpty()
    @IsNumber()
    service: number;


}