import { IsString, IsInt, Min, IsArray, ArrayNotEmpty } from 'class-validator';

export class GenerateItineraryDto {
  @IsString()
  destination: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  interests: string[];

  @IsInt()
  @Min(1)
  days: number;
}
