// src/itinerary/itinerary.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Itinerary } from '../entity/itineraries.entity';
import { TemplateService } from '../template/template.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private readonly itineraryRepo: Repository<Itinerary>,
    private readonly templateService: TemplateService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async generateItinerary(
    city: string,
    tripType: string,
    duration: number,
    // userId: number,
  ): Promise<Itinerary> {
    // Fetch templates from DB or environment
    const titleTemplate =
      (await this.templateService.findByName('itinerary_title')) ||
      this.configService.get('ITINERARY_TITLE_TEMPLATE');

    const descriptionTemplate =
      (await this.templateService.findByName('itinerary_description')) ||
      this.configService.get('ITINERARY_DESCRIPTION_TEMPLATE');

    // Replace placeholders
    const title = this.replacePlaceholders(titleTemplate, { tripType, city });
    const description = this.replacePlaceholders(descriptionTemplate, {
      tripType,
      city,
      duration,
    });

    // Fetch activities from Google Places API
    const activities = await this.fetchActivities(city, tripType);

    // Save itinerary
    const itinerary = this.itineraryRepo.create({
      title,
      description,
      startDate: new Date(),
      endDate: new Date(Date.now() + duration * 24 * 60 * 60 * 1000),
      activities,
      // user: { id: userId },
    });

    return this.itineraryRepo.save(itinerary);
  }

  private replacePlaceholders(template: string, values: Record<string, any>): string {
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