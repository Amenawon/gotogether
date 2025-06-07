import { Repository } from 'typeorm';
import { Country } from '../entity/country.entity';
import { CountryResponse } from 'src/models/countrydto';
export declare class CountryService {
    private readonly countryRepository;
    constructor(countryRepository: Repository<Country>);
    getCountries(): Promise<CountryResponse[]>;
}
