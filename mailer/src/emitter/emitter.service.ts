import { Injectable } from '@nestjs/common';
import { MailDto } from 'src/listener/dto/mail.dto';
import { sendGmail } from 'src/mail/smtp';

@Injectable()
export class EmitterService {

    sendEmail(mailData: MailDto) {
        sendGmail(mailData);
    }


}
