import { Trip } from './trips.entity';
export declare class Destination {
    id: string;
    trip: Trip;
    locationName: string;
    country: string;
    city: string;
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
}
