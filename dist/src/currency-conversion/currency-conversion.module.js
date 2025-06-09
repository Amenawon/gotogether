"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversionModule = void 0;
const common_1 = require("@nestjs/common");
const currency_conversion_service_1 = require("./currency-conversion.service");
const currency_conversion_controller_1 = require("./currency-conversion.controller");
const axios_1 = require("@nestjs/axios");
let CurrencyConversionModule = class CurrencyConversionModule {
};
exports.CurrencyConversionModule = CurrencyConversionModule;
exports.CurrencyConversionModule = CurrencyConversionModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [currency_conversion_service_1.CurrencyConversionService],
        controllers: [currency_conversion_controller_1.CurrencyConversionController],
    })
], CurrencyConversionModule);
//# sourceMappingURL=currency-conversion.module.js.map