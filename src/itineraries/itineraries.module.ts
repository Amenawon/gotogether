// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { ItinerariesController } from './itineraries.controller';
import { ItineraryService } from './itineraries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerary } from 'src/entity/itineraries.entity';
import { TemplateModule } from 'src/template/template.module';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Itinerary]),
    HttpModule,
    TemplateModule,
    
  ],
  controllers: [ItinerariesController],
  providers: [ItineraryService, ConfigService],
})
export class ItineraryModule {}