import { CurrencyConversionService } from './currency-conversion.service';
export declare class CurrencyConversionController {
    private readonly currencyConversionService;
    constructor(currencyConversionService: CurrencyConversionService);
    convertCurrency(from: string, to: string, amount: number): Promise<number>;
}
