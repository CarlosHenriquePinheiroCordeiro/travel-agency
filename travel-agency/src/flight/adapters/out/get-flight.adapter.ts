import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { GetFlightPort } from "src/flight/application/ports/out/get-flight.port";
import { Flight } from "src/flight/domain/flight";

@Injectable()
export class GetFlightAdapter extends GetFlightPort {
    
    constructor(private readonly httpService: HttpService) { super() }

    async getFlight(): Promise<Flight[]> {
        const resp = await this.getFlightsFromAxios();
        return resp;
    }

    private async getFlightsFromAxios(): Promise<Flight[]> {
        const resp = await this.httpService.get('http://flight-sys:3000/flight').toPromise()
        .then((response) => {
            return response.data.map((data) => {
                const flight = new Flight();
                flight.id = data._id;
                flight.plane = data.planeId;
                flight.takeoff = data.takeoff;
                flight.landing = data.landing;
                return flight;
            });
        })
        return resp;
    }

}