import { Trip } from './trips.entity';
export declare class Flight {
    id: string;
    trip: Trip;
    airline: string;
    flightNumber: string;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: Date;
    arrivalTime: Date;
    bookingReference: string;
    cost: number;
    currency: string;
    createdAt: Date;
    updatedAt: Date;
}
