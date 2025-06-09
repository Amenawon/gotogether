"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const template_controller_1 = require("./template.controller");
describe('TemplateController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [template_controller_1.TemplateController],
        }).compile();
        controller = module.get(template_controller_1.TemplateController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=template.controller.spec.js.map