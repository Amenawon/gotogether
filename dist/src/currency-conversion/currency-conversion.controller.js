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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const currency_conversion_service_1 = require("./currency-conversion.service");
let CurrencyConversionController = class CurrencyConversionController {
    constructor(currencyConversionService) {
        this.currencyConversionService = currencyConversionService;
    }
    async convertCurrency(from, to, amount) {
        return this.currencyConversionService.convertCurrency(from, to, amount);
    }
};
exports.CurrencyConversionController = CurrencyConversionController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __param(2, (0, common_1.Query)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], CurrencyConversionController.prototype, "convertCurrency", null);
exports.CurrencyConversionController = CurrencyConversionController = __decorate([
    (0, swagger_1.ApiTags)('currency-conversion'),
    (0, common_1.Controller)('currency-conversion'),
    __metadata("design:paramtypes", [currency_conversion_service_1.CurrencyConversionService])
], CurrencyConversionController);
//# sourceMappingURL=currency-conversion.controller.js.map