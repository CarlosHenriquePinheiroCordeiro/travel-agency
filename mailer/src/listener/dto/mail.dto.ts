import { IsNotEmpty, IsString } from "class-validator";

export class MailDto {
    @IsString()
    @IsNotEmpty()
    senderEmail: string;

    @IsString()
    @IsNotEmpty()
    senderPass: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}