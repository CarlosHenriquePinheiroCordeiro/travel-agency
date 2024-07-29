import { IsNotEmpty, IsString, IsUppercase } from "class-validator";

export class CreateStationDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    
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
