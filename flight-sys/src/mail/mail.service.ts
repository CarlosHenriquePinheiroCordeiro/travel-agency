import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MailDto } from './dto/mail.dto';
import { CreateTicketDto } from 'src/ticket/dto/create-ticket.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    @Inject('MAIL_SERVICE') private rabbitClient: ClientProxy,
    private configService: ConfigService,
  ) {}

  sendTicketEmail(createTicketDto: CreateTicketDto) {
    this.sendEmail(this.ticketToMailMsg(createTicketDto));
  }

  sendEmail(mailData: MailDto) {
    this.rabbitClient.emit('send-email', mailData);
  }

  private ticketToMailMsg(createTicketDto: CreateTicketDto): MailDto {
    const mail: MailDto = {
      email: createTicketDto.email,
      owner: createTicketDto.owner,
    };
    Object.assign(mail, {
      content: this.getTemplateStringFlightMail(createTicketDto),
    });
    Object.assign(mail, { subject: 'SUBJECT TEST' });
    Object.assign(mail, {
      senderEmail: this.configService.get<string>('SENDER_EMAIL'),
    });
    Object.assign(mail, {
      senderPass: this.configService.get<string>('SENDER_EMAIL_PASS'),
    });
    return mail;
  }

  private getTemplateStringFlightMail(createTicketDto: CreateTicketDto) {
    return `${createTicketDto.owner} - FLIGHT ${createTicketDto.flightId}`;
  }
}
