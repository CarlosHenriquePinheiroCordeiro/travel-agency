import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { DefaultController } from 'src/default.controller';

@Controller('ticket')
export class TicketController extends DefaultController {

  constructor(private readonly ticketService: TicketService) {
    super(ticketService);
  }

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
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
