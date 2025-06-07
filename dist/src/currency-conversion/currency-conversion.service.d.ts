import { HttpService } from '@nestjs/axios';
export declare class CurrencyConversionService {
    private readonly httpService;
    constructor(httpService: HttpService);
    convertCurrency(fromCurrency: string, toCurrency: string, amount: number): Promise<number>;
}
