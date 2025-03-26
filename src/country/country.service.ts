import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { env } from 'process';
import { map, Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { Country } from 'src/entity/country.entity';
import { CountryResponse } from 'src/models/countrydto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>
  ) {}

  async getCountries(): Promise<CountryResponse[]> {
    const countries = await this.countryRepository.find();
    console.log(countries);
    return countries.map((country: any) => ({
      id: country.id,
      name: country.name,
      code: country.code,
    })) as CountryResponse[];
  }
}