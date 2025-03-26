// src/itinerary/itinerary.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Itinerary } from '../entity/itineraries.entity';
import { TemplateService } from '../template/template.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { GenerateItineraryDto } from './generate-itinerary-dto';
import { OpenAI } from 'openai';

const INSTRUCTIONS='You are an expert travel planner, helping people build their travel itineraries with activities suggestions, where they can go, and  best places tailored to them';
const MODEL='gpt-4';
const TEMPERATURE=0.7;

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private readonly itineraryRepo: Repository<Itinerary>,
    private readonly templateService: TemplateService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly openai: OpenAI,
  ) {}

  async generateItinerary(request: GenerateItineraryDto): Promise<string> {
    const { destination, interests, days } = request;

    const prompt = `Generate a ${days}-day travel itinerary for ${destination}. 
    The user's interests include: ${interests.join(', ')}. 
    Suggest interesting activities, places to visit, and food recommendations.`;

    const response = await this.openai.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content:INSTRUCTIONS
        },
        { role: 'user', content: prompt },
      ],
       temperature: TEMPERATURE,
    });

    console.log(response);
    return response.choices[0]?.message?.content || 'No itinerary generated.'
  }

  private replacePlaceholders(
    template: string,
    values: Record<string, any>,
  ): string {
    return Object.keys(values).reduce(
      (result, key) => result.replace(new RegExp(`{${key}}`, 'g'), values[key]),
      template,
    );
  }

  private async fetchActivities(city: string, type: string): Promise<any[]> {
    const apiKey = this.configService.get('GOOGLE_PLACES_API_KEY');
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}+in+${city}&key=${apiKey}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data.results;
  }
}
