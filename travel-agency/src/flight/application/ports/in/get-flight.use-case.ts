import { Flight } from "src/flight/domain/flight";

export abstract class GetFlightUseCase {
    abstract getFlight(): Promise<Flight[]>;
}