import { Module } from '@nestjs/common';
import { CurrencyConversionService } from './currency-conversion.service';
import { CurrencyConversionController } from './currency-conversion.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [CurrencyConversionService],
    controllers: [CurrencyConversionController],
})
export class CurrencyConversionModule {}