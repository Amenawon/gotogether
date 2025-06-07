"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversionService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let CurrencyConversionService = class CurrencyConversionService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async convertCurrency(fromCurrency, toCurrency, amount) {
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
};
exports.CurrencyConversionService = CurrencyConversionService;
exports.CurrencyConversionService = CurrencyConversionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CurrencyConversionService);
//# sourceMappingURL=currency-conversion.service.js.map