import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MailDto } from './dto/mail.dto';
import { CreateTicketDto } from 'src/ticket/dto/create-ticket.dto';

@Injectable()
export class MailService {

    constructor(@Inject('MAIL_SERVICE') private rabbitClient: ClientProxy) {}

    sendTicketEmail(createTicketDto: CreateTicketDto) {
        this.sendEmail(this.ticketToMailMsg(createTicketDto));
    }

    sendEmail(mailData: MailDto) {
        this.rabbitClient.emit('send-email', mailData);
    }

    private ticketToMailMsg(createTicketDto: CreateTicketDto): MailDto {
        const mail: MailDto = {
            email: createTicketDto.email,
            owner: createTicketDto.owner
        };
        Object.assign(mail, { content: this.getTemplateStringFlightMail(createTicketDto) });
        return mail;
    }

    private getTemplateStringFlightMail(createTicketDto: CreateTicketDto) {
        return `${createTicketDto.owner} - FLIGHT ${createTicketDto.flightId}`;
    }


}
