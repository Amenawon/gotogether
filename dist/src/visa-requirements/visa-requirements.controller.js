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
exports.VisaRequirementsController = void 0;
const common_1 = require("@nestjs/common");
const visa_requirements_service_1 = require("./visa-requirements.service");
const swagger_1 = require("@nestjs/swagger");
let VisaRequirementsController = class VisaRequirementsController {
    constructor(visaRequirementsService) {
        this.visaRequirementsService = visaRequirementsService;
    }
    getVisaRequirements(visaRequirementsRequest) {
        return this.visaRequirementsService.getVisaRequirements(visaRequirementsRequest);
    }
};
exports.VisaRequirementsController = VisaRequirementsController;
__decorate([
    (0, common_1.Post)('get-visa-requirements'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VisaRequirementsController.prototype, "getVisaRequirements", null);
exports.VisaRequirementsController = VisaRequirementsController = __decorate([
    (0, common_1.Controller)(''),
    (0, swagger_1.ApiTags)('Visa Requirements'),
    __metadata("design:paramtypes", [visa_requirements_service_1.VisaRequirementsService])
], VisaRequirementsController);
//# sourceMappingURL=visa-requirements.controller.js.map