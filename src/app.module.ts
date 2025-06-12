import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
 
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { VisaRequirementsModule } from './visa-requirements/visa-requirements.module';
import { UsersModule } from './users/users.module';
import { ItineraryModule } from './itineraries/itineraries.module';
import { AuthModule } from './auth/auth.module';
import { CurrencyConversionModule } from './currency-conversion/currency-conversion.module';

import * as dotenv from 'dotenv';
import { PrismaModule } from './prisma.module';
import { CacheModule } from '@nestjs/cache-manager';

dotenv.config();

console.log('🔌 DB_URL (loaded from env):', process.env.DB_URL); // for debugging

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
     CacheModule.register({
      ttl: 60 * 5, 
      max: 100, 
    }),
    PrismaModule,
    CountryModule,
    VisaRequirementsModule,
    ItineraryModule,
    UsersModule,
    AuthModule,
    CurrencyConversionModule,
  ],
  providers: [AppService],
})
export class AppModule {}
