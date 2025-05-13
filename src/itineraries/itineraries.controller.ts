import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ItineraryService } from './itineraries.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GenerateItineraryDto } from './generate-itinerary-dto';

@Controller('itineraries')
@ApiTags('Itineraries')
export class ItinerariesController {
  constructor(private readonly itineraryService: ItineraryService) {}

  @Post('generate')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        days: { type: 'string', example: '5' },
        destination: { type: 'string', example: 'London' },
        interests: { type: 'array', example: ['museums', 'parks', 'food'] },
      },
    },
  })
  async generate(@Body() body: GenerateItineraryDto): Promise<any> {
    if (!body.days || !body.destination || !body.interests) {
      throw new BadRequestException(
        'Missing required fields: days, destination, or interests',
      );
    }
    return this.itineraryService.generateItinerary(body);
  }
}
