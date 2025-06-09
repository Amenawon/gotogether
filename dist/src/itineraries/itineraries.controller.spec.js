"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const itineraries_controller_1 = require("./itineraries.controller");
describe('ItinerariesController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [itineraries_controller_1.ItinerariesController],
        }).compile();
        controller = module.get(itineraries_controller_1.ItinerariesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=itineraries.controller.spec.js.map