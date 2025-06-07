import { User } from './users.entity';
export declare class Itinerary {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    activities: any[];
    user: User;
}
