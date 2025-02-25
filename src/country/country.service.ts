import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Country } from "src/entity/country.entity";
import { Repository } from "typeorm";


@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

    async findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

}