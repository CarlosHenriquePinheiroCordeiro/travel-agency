import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { Flight, FlightSchema } from 'src/flight/schemas/flight.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from 'src/mail/mail.module';
import { FlightModule } from 'src/flight/flight.module';
import { FlightService } from 'src/flight/flight.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: Flight.name, schema: FlightSchema },
    ]),
    MailModule,
    FlightModule,
  ],
  controllers: [TicketController],
  providers: [TicketService, FlightService],
})
export class TicketModule {}
