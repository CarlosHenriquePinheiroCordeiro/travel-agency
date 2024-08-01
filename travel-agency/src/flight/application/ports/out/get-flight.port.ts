import { Flight } from "src/flight/domain/flight";

export abstract class GetFlightPort {
    abstract getFlight(): Promise<Flight[]>;
}