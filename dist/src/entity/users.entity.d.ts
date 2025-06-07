import { Itinerary } from './itineraries.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    name: string;
    itineraries: Itinerary[];
    createdAt: Date;
    updatedAt: Date;
    phoneNumber?: string;
    isVerified: boolean;
    profileImage?: string;
    constructor(partial: Partial<User>);
}
