import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { Country } from 'src/entity/country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryService } from './country.service'; 

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [TypeOrmModule.forFeature([Country])]
})
export class CountryModule {}
