import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { Flight, FlightSchema } from 'src/flight/schemas/flight.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Ticket.name, schema: TicketSchema},
    { name: Flight.name, schema: FlightSchema},
  ])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
