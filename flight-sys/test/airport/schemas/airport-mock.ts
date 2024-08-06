import { AirportSchema } from "../../../src/airport/schemas/airport.schema";

export const newAirportMock = (name='AirportTest', international = true, city = 'TESTING', state = 'TEST', country = 'TST', active = true, deletedAt = null) => {
    const mock = {
        name,
        international,
        city,
        state,
        country,
        active,
        deletedAt
    }
    verifyModelProperties(mock);
    return mock;
}

export const verifyModelProperties = (mockAirport: any) => {
    const schemaKeys = Object.keys((AirportSchema.obj));
    const mockKeys = Object.keys(mockAirport);

    expect(mockKeys).toEqual(expect.arrayContaining(schemaKeys));
    expect(schemaKeys).toEqual(expect.arrayContaining(mockKeys));
}