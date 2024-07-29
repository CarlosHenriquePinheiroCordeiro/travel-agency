import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { PriceBusDto } from "./price-bus.dto";

export class CreateBusDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    seats: number;

    @IsString()
    type: number;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PriceBusDto)
    prices: Record<string, number>;

    @IsString()
    @IsNotEmpty()
    company: string;


}
