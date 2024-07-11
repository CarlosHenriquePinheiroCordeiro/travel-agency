import { IsNotEmpty, IsString } from "class-validator";

export class CreateTravelDto {

    @IsString()
    @IsNotEmpty()
    name: string;


}
