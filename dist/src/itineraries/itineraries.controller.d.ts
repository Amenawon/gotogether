import { ItineraryService } from './itineraries.service';
import { GenerateItineraryDto } from './generate-itinerary-dto';
export declare class ItinerariesController {
    private readonly itineraryService;
    constructor(itineraryService: ItineraryService);
    generate(body: GenerateItineraryDto): Promise<any>;
}
