import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { DefaultController } from 'src/default.controller';
import { MailService } from 'src/mail/mail.service';
import { MailDto } from 'src/mail/dto/mail.dto';

@Controller('ticket')
export class TicketController extends DefaultController {

  constructor(
    private readonly ticketService: TicketService,
    private readonly mailService: MailService,
  ) {
    super(ticketService);
  }

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    const response = this.ticketService.create(createTicketDto);
    this.mailService.sendTicketEmail(createTicketDto);
    return response;
  }

  @Get()
  findAllActive() {
    return this.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }

}
