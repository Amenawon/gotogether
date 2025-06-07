import { GenerateItineraryDto } from './generate-itinerary-dto';
import { OpenAI } from 'openai';
export declare class ItineraryService {
    private readonly openai;
    constructor(openai: OpenAI);
    generateItinerary(request: GenerateItineraryDto): Promise<string>;
}
