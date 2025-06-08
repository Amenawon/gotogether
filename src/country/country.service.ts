import { Injectable, OnModuleInit } from '@nestjs/common'; 
import { CountryResponse } from 'src/models/countrydto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CountryService {
  constructor( 
    private prisma: PrismaService
  ) {}

  async getCountries(): Promise<CountryResponse[]> {
    const countries = await this.prisma.country.findMany(); 
     return countries.map((country: any) => ({
      id: country.id,
      name: country.name,
      code: country.code,
    })) as CountryResponse[];
  }
}
