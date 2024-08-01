import { Injectable } from "@nestjs/common";
import { GetFlightUseCase } from "../ports/in/get-flight.use-case";
import { Flight } from "src/flight/domain/flight";
import { GetFlightPort } from "../ports/out/get-flight.port";

@Injectable()
export class GetFlightService implements GetFlightUseCase {

    constructor(private getFlightPort: GetFlightPort) {}

    async getFlight(): Promise<Flight[]> {
        const resp = await this.getFlightPort.getFlight();
        return resp;
    }
    
}