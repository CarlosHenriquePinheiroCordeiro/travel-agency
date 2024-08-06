import { Provider } from "@nestjs/common";
import { GetFlightPort } from "src/flight/application/ports/out/get-flight.port";
import { GetFlightAdapter } from "./get-flight.adapter";

export const ServicesOut: Provider[] = [
    {
        provide: GetFlightPort,
        useClass: GetFlightAdapter
    }
];