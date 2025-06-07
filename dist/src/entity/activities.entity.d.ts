import { Trip } from './trips.entity';
import { Destination } from './destinations.entity';
export declare class Activity {
    id: string;
    trip: Trip;
    destination: Destination;
    activityName: string;
    description: string;
    startTime: Date;
    endTime: Date;
    category: string;
    cost: number;
    currency: string;
    bookingReference: string;
    createdAt: Date;
    updatedAt: Date;
}
