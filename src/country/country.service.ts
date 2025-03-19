import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { env } from 'process';
import { map, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Country } from 'src/entity/country.entity';
import { CountryResponse } from 'src/models/countrydto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
    private readonly httpService: HttpService
  ) {}
  private readonly countryApiUrl = 'https://city-and-state-search-api.p.rapidapi.com/countries';

  getCountries(): Observable<CountryResponse[]> {
    try {
      return this.httpService
        .get(`${this.countryApiUrl}/`, {
          headers: {
            'x-rapidapi-key': '01a05593a0msh3317870990c6c85p1da3b8jsn2df3a83549d9'
          },
        })
        .pipe(
          map((response: AxiosResponse<CountryResponse[]>) => response.data),
        );
    } catch (error) {
      console.error(error.message);
    }
  }
}