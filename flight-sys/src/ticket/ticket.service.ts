import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/default.service';
import { Ticket } from './schemas/ticket.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FlightService } from 'src/flight/flight.service';

@Injectable()
export class TicketService extends DefaultService {

    constructor(
        @InjectModel(Ticket.name) private ticketModel: Model<Ticket>,
        private readonly flightService: FlightService
    ) {
        super(ticketModel);
    }

    protected async isValidInsert(insertData): Promise<boolean> {
        const valid = await this.isFlightExists(insertData);
        return valid;
    }

    protected async isFlightExists(insertData): Promise<boolean> {
        const resp = await this.flightService.findById(insertData.flightId);
        return resp;
    }


}
