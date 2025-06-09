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
exports.VisaRequirementsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const process_1 = require("process");
const operators_1 = require("rxjs/operators");
let VisaRequirementsService = class VisaRequirementsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiUrl = 'https://visa-requirement.p.rapidapi.com/';
    }
    getVisaRequirements(requestPayload) {
        try {
            return this.httpService
                .post(`${this.apiUrl}/`, requestPayload, {
                headers: {
                    'X-Rapidapi-Key': process_1.env.RAPIDAPI_KEY,
                    'X-Rapidapi-Host': 'visa-list.p.rapidapi.com',
                },
            })
                .pipe((0, operators_1.map)((response) => {
                response.data;
            }));
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.VisaRequirementsService = VisaRequirementsService;
exports.VisaRequirementsService = VisaRequirementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], VisaRequirementsService);
//# sourceMappingURL=visa-requirements.service.js.map