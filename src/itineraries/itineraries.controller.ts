import { BadRequestException, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ItineraryService } from './itineraries.service';
import { GenerateItineraryDto } from 'src/models/generateitinerary';
import { ApiBody, ApiTags } from '@nestjs/swagger';


@Controller('itineraries')
@ApiTags('Itineraries')
export class ItinerariesController {
  constructor(private readonly itineraryService: ItineraryService) {} 

  @Post('generate')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        city: { type: 'string', example: 'London' },
        tripType: { type: 'string', example: 'Adventure' },
        duration: { type: 'integer', example: 5 },
      },
    },
  })  async generate(@Body() body: GenerateItineraryDto): Promise<any> {
    if (!body.city || !body.tripType || !body.duration) {
      throw new BadRequestException('Missing required fields: city, tripType, or duration');
    }
    return this.itineraryService.generateItinerary(body.city, body.tripType, body.duration);
  }
}