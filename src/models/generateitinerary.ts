// src/itineraries/dto/generate-itinerary.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class GenerateItineraryDto {
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  tripType: string;

  @IsArray()
  preferredActivities: string[];

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
