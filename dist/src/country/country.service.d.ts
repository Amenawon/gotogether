import { CountryResponse } from 'src/models/countrydto';
import { PrismaService } from 'src/prisma.service';
export declare class CountryService {
    private prisma;
    constructor(prisma: PrismaService);
    getCountries(): Promise<CountryResponse[]>;
}
