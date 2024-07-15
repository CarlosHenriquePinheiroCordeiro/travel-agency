import { Injectable } from '@nestjs/common';
import { MailDto } from 'src/listener/dto/mail.dto';

@Injectable()
export class EmitterService {

    sendEmail(mailData: MailDto) {
        console.log(mailData);
    }


}
