import { Module } from '@nestjs/common';
import { CurrencyConversionService } from './currency-conversion.service';
import { CurrencyConversionController } from './currency-conversion.controller';

@Module({
    providers: [CurrencyConversionService],
    controllers: [CurrencyConversionController],
})
export class CurrencyConversionModule {}