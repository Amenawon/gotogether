import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
 
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { VisaRequirementsModule } from './visa-requirements/visa-requirements.module';
import { UsersModule } from './users/users.module';
import { ItineraryModule } from './itineraries/itineraries.module';
import { AuthModule } from './auth/auth.module';
import { CurrencyConversionModule } from './currency-conversion/currency-conversion.module';

import * as dotenv from 'dotenv';
import { PrismaModule } from './prisma.module';
dotenv.config();

console.log('🔌 DB_URL (loaded from env):', process.env.DB_URL); // for debugging

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    PrismaModule,
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     const dbUrl = configService.get<string>('DB_URL');
    //     console.log('✅ Connected to:', new URL(dbUrl || '').host);

    //     return {
    //       type: 'postgres',
    //       url: dbUrl,
    //       ssl: true,
    //       extra: {
    //         ssl: {
    //           rejectUnauthorized: false,
    //         },
    //       },
    //       synchronize: false,
    //       autoLoadEntities: true,
    //       entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //       migrations: [__dirname + '/migrations/*{.ts,.js}'],
    //     };
    //   },
    // }),

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
