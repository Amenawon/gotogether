import { Controller, Get, Query } from '@nestjs/common';
import { AmadeusService } from './amadeus.service';

@Controller('amadeus')
export class AmadeusController {
  constructor(private readonly amadeusService: AmadeusService) {}

  @Get('pois')
  async getPOIs(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ) {
    return this.amadeusService.getPOIs(latitude, longitude);
  }
}