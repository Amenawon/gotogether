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
exports.ItinerariesController = void 0;
const common_1 = require("@nestjs/common");
const itineraries_service_1 = require("./itineraries.service");
const swagger_1 = require("@nestjs/swagger");
const generate_itinerary_dto_1 = require("./generate-itinerary-dto");
let ItinerariesController = class ItinerariesController {
    constructor(itineraryService) {
        this.itineraryService = itineraryService;
    }
    async generate(body) {
        if (!body.days || !body.destination || !body.interests) {
            throw new common_1.BadRequestException('Missing required fields: days, destination, or interests');
        }
        return this.itineraryService.generateItinerary(body);
    }
};
exports.ItinerariesController = ItinerariesController;
__decorate([
    (0, common_1.Post)('generate'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                days: { type: 'string', example: '5' },
                destination: { type: 'string', example: 'London' },
                interests: { type: 'array', example: ['museums', 'parks', 'food'] },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_itinerary_dto_1.GenerateItineraryDto]),
    __metadata("design:returntype", Promise)
], ItinerariesController.prototype, "generate", null);
exports.ItinerariesController = ItinerariesController = __decorate([
    (0, common_1.Controller)('itineraries'),
    (0, swagger_1.ApiTags)('Itineraries'),
    __metadata("design:paramtypes", [itineraries_service_1.ItineraryService])
], ItinerariesController);
//# sourceMappingURL=itineraries.controller.js.map