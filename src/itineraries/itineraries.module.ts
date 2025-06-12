// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { ItinerariesController } from './itineraries.controller';
import { ItineraryService } from './itineraries.service'; 
import { TemplateModule } from '../template/template.module';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Module({
  imports: [HttpModule, TemplateModule],
  controllers: [ItinerariesController],
  providers: [
    ItineraryService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) => {
        const openAIKey = configService.get('OPENAI_API_KEY');
        return new OpenAI(openAIKey);
      },
      inject: [ConfigService],
    },
  ],
  exports: [ItineraryService],
})
export class ItineraryModule {}
