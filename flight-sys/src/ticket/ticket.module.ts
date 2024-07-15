import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { Flight, FlightSchema } from 'src/flight/schemas/flight.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: Flight.name, schema: FlightSchema },
    ]),
    MailModule,
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
