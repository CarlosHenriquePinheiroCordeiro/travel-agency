import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsUppercase } from "class-validator";
import { IsObjectId } from "src/decorators/is-object-id.decorator";
import { PlaneClassEnum } from "src/plane/dto/plane-class-info.dto";

export class CreateTicketDto {

    @IsNotEmpty()
    @IsObjectId()
    flightId: string;

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

    @IsNotEmpty()
    @IsEnum(PlaneClassEnum)
    class: PlaneClassEnum;


}
