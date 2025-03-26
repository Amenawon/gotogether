import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CountryModule } from './country/country.module';
import { VisaRequirementsModule } from './visa-requirements/visa-requirements.module';
import { UsersModule } from './users/users.module';
import { ItineraryModule } from './itineraries/itineraries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import typeorm from './config/typeorm';  
import { CurrencyConversionModule } from './currency-conversion/currency-conversion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    DatabaseModule, 
    CountryModule,
    VisaRequirementsModule,
    ItineraryModule,
    UsersModule,
    AuthModule,
    CurrencyConversionModule
  ], 
  providers: [AppService],
})
export class AppModule {}
