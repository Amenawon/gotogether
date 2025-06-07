import { User } from './users.entity';
export declare class Trip {
    id: string;
    user: User;
    title: string;
    startDate: Date;
    endDate: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
