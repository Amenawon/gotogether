// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { ItinerariesController } from './itineraries.controller';
import { ItineraryService } from './itineraries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerary } from 'src/entity/itineraries.entity';
import { TemplateModule } from 'src/template/template.module';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Module({
  imports: [TypeOrmModule.forFeature([Itinerary]), HttpModule, TemplateModule],
  controllers: [ItinerariesController],
  providers: [
    ItineraryService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) => {
        const openAIKey = configService.get('OPENAI_API_KEY');
        return new OpenAI(openAIKey);
      },
      inject : [ConfigService]
    },
  ],
  exports: [ItineraryService]
})
export class ItineraryModule {}
