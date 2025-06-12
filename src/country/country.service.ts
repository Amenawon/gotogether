import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CountryResponse } from 'src/models/countrydto';
import { PrismaService } from 'src/prisma.service';
import { Cache } from 'cache-manager';

@Injectable()
export class CountryService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private prisma: PrismaService,
  ) {}

  async getCountries(): Promise<CountryResponse[]> {
    const cacheKey = `countries`;
    const cached = await this.cacheManager.get(cacheKey);

    if (cached) return cached as CountryResponse[];

    const countries = await this.prisma.country.findMany();
    countries.map((country: any) => ({
      id: country.id,
      name: country.name,
      code: country.code,
    })) as CountryResponse[];

    await this.cacheManager.set(cacheKey, countries, 1000 * 60); // Cache for 1000 minutes
    return countries as CountryResponse[];
  }
}
