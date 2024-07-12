import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/default.service';
import { Ticket } from './schemas/ticket.schema';
import { Travel } from 'src/travel/schemas/travel.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TicketService extends DefaultService {

    constructor(@InjectModel(Ticket.name) private travelModel: Model<Travel>) {
        super(travelModel);
    }


}
