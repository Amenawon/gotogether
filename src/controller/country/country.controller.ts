import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CountryService } from "./country.service";

@ApiTags('Country')
@Controller('country')
export class CountryController {

    constructor(private readonly countryService: CountryService) {}

    @Get()
    async getAllCountries() {
    return this.countryService.findAll();
    }
}