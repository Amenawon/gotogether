import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Itinerary } from '../entity/itineraries.entity';
import { TemplateService } from '../template/template.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { GenerateItineraryDto } from './generate-itinerary-dto';
import { OpenAI } from 'openai';

const INSTRUCTIONS =
  'You are an expert travel planner, helping people build their travel itineraries with activities suggestions, where they can go, and  best places tailored to them';
const MODEL = 'gpt-4-turbo';
const TEMPERATURE = 0.7;

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private readonly openai: OpenAI,
  ) {}

  async generateItinerary(request: GenerateItineraryDto): Promise<string> {
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
}
