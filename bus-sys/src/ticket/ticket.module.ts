import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { Trip, TripSchema } from 'src/trip/schemas/trip.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: Trip.name, schema: TripSchema },
    ]),
    MailModule,
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
