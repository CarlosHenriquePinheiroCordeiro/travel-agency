import { Controller, Get } from "@nestjs/common";
import { GetFlightUseCase } from "src/flight/application/ports/in/get-flight.use-case";

@Controller('get-flight')
export class GetFlightController {
    constructor(private readonly getFlightUseCase: GetFlightUseCase) {}

    @Get()
    getFlights() {
        return this.getFlightUseCase.getFlight();
    }
}