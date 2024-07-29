import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsUppercase } from "class-validator";
import { IsObjectId } from "src/decorators/is-object-id.decorator";

export class CreateTicketDto {

    @IsNotEmpty()
    @IsObjectId()
    tripId: string;

    @IsNotEmpty()
    @IsUppercase()
    owner: string;

    @IsNotEmpty()
    document: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsDateString()
    birthDate: string;



}
