"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryModule = void 0;
const common_1 = require("@nestjs/common");
const itineraries_controller_1 = require("./itineraries.controller");
const itineraries_service_1 = require("./itineraries.service");
const typeorm_1 = require("@nestjs/typeorm");
const itineraries_entity_1 = require("../entity/itineraries.entity");
const template_module_1 = require("../template/template.module");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const openai_1 = __importDefault(require("openai"));
let ItineraryModule = class ItineraryModule {
};
exports.ItineraryModule = ItineraryModule;
exports.ItineraryModule = ItineraryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([itineraries_entity_1.Itinerary]), axios_1.HttpModule, template_module_1.TemplateModule],
        controllers: [itineraries_controller_1.ItinerariesController],
        providers: [
            itineraries_service_1.ItineraryService,
            {
                provide: openai_1.default,
                useFactory: (configService) => {
                    const openAIKey = configService.get('OPENAI_API_KEY');
                    return new openai_1.default(openAIKey);
                },
                inject: [config_1.ConfigService],
            },
        ],
        exports: [itineraries_service_1.ItineraryService],
    })
], ItineraryModule);
//# sourceMappingURL=itineraries.module.js.map