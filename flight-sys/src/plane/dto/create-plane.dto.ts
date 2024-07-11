import { IsNotEmpty, IsString, IsUppercase, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PlaneClassInfoDto } from "./plane-class-info.dto";

export class CreatePlaneDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PlaneClassInfoDto)
    seats: PlaneClassInfoDto;

    @IsString()
    @IsNotEmpty()
    @IsUppercase()
    company: string;
}
