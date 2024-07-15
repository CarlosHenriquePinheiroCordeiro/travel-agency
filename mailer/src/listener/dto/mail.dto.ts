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
    recipientEmail: string;

    @IsString()
    @IsNotEmpty()
    recipientPass: string

    @IsString()
    @IsNotEmpty()
    content: string;
}