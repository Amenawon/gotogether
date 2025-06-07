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
exports.ItineraryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const itineraries_entity_1 = require("../entity/itineraries.entity");
const openai_1 = require("openai");
const INSTRUCTIONS = 'You are an expert travel planner, helping people build their travel itineraries with activities suggestions, where they can go, and  best places tailored to them';
const MODEL = 'gpt-4-turbo';
const TEMPERATURE = 0.7;
let ItineraryService = class ItineraryService {
    constructor(openai) {
        this.openai = openai;
    }
    async generateItinerary(request) {
        const { destination, interests, days } = request;
        const prompt = `You are a travel expert creating a structured ${days}-day travel itinerary for ${destination}. 
    The user’s interests include: ${interests.join(', ')}. 
    
    ### Instructions:
    - Recommend diverse and engaging activities, considering the user's interests.
    - Include a mix of cultural sites, outdoor experiences, food recommendations, and hidden gems.
    - Ensure the itinerary follows a logical flow, starting with breakfast and ending with dinner.
    - Provide precise locations for all activities.
    - Keep descriptions informative yet concise.
    - Format the response strictly in the provided JSON.
    
    {
      "destination": "${destination}",
      "duration": "${days} days",
      "interests": ${JSON.stringify(interests)},
      "itinerary": [
        {
          "day": 1,
          "title": "Title of the Day's Theme",
          "activities": [
            {
              "time": "08:00 AM",
              "name": "Activity Name",
              "description": "Brief description of the activity.",
              "location": "Location name, City"
            }
          ]
        }
      ]
    }
    Ensure the output is this JSON format with all fields correctly populated.`;
        const response = await this.openai.chat.completions.create({
            model: MODEL,
            messages: [
                {
                    role: 'system',
                    content: INSTRUCTIONS,
                },
                { role: 'user', content: prompt },
            ],
            temperature: TEMPERATURE,
            response_format: { type: 'json_object' },
        });
        return response.choices[0]?.message?.content || 'No itinerary generated.';
    }
};
exports.ItineraryService = ItineraryService;
exports.ItineraryService = ItineraryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(itineraries_entity_1.Itinerary)),
    __metadata("design:paramtypes", [openai_1.OpenAI])
], ItineraryService);
//# sourceMappingURL=itineraries.service.js.map