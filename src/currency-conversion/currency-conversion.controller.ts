import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrencyConversionService } from './currency-conversion.service';

@ApiTags('currency-conversion')
@Controller('currency-conversion')
export class CurrencyConversionController {
  constructor(
    private readonly currencyConversionService: CurrencyConversionService,
  ) {}

  @Get()
  async convertCurrency(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('amount') amount: number,
  ) {
    return this.currencyConversionService.convertCurrency(from, to, amount);
  }
}
