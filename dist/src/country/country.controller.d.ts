import { CountryService } from './country.service';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    getAllCountries(): Promise<import("../models/countrydto").CountryResponse[]>;
}
