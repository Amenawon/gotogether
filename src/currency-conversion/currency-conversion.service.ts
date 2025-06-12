import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyConversionService {
  constructor(private readonly httpService: HttpService) {}

  async convertCurrency(
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ): Promise<number> {
    const response = await this.httpService
      .get(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
      .toPromise();
    const rates = response.data.rates;
    const rate = rates[toCurrency];
    if (!rate) {
      throw new Error(`Unable to find rate for currency: ${toCurrency}`);
    }
    return amount * rate;
  }
}
