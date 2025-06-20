"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisaRequirementsModule = void 0;
const common_1 = require("@nestjs/common");
const visa_requirements_controller_1 = require("./visa-requirements.controller");
const visa_requirements_service_1 = require("./visa-requirements.service");
const axios_1 = require("@nestjs/axios");
let VisaRequirementsModule = class VisaRequirementsModule {
};
exports.VisaRequirementsModule = VisaRequirementsModule;
exports.VisaRequirementsModule = VisaRequirementsModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [visa_requirements_controller_1.VisaRequirementsController],
        providers: [visa_requirements_service_1.VisaRequirementsService],
        exports: [visa_requirements_service_1.VisaRequirementsService],
    })
], VisaRequirementsModule);
//# sourceMappingURL=visa-requirements.module.js.map