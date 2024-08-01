import { Provider } from "@nestjs/common";
import { GetFlightUseCase } from "../ports/in/get-flight.use-case";
import { GetFlightService } from "./get-flight-service";

export const Services: Provider[] = [
    {
        provide: GetFlightUseCase,
        useClass: GetFlightService
    }
];