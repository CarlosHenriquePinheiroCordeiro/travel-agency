import { Injectable } from '@nestjs/common';
import { MailDto } from 'src/listener/dto/mail.dto';
import { sendEmail } from 'src/mail/smtp';

@Injectable()
export class EmitterService {

    async sendEmail(mailData: MailDto) {
        await sendEmail(mailData);
    }


}
