import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from 'src/entity/activities.entity';
import { Country } from 'src/entity/country.entity';
import { Destination } from 'src/entity/destinations.entity';
import { Flight } from 'src/entity/flights.entity';
import { Trip } from 'src/entity/trips.entity';
import { User } from 'src/entity/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.dev`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        // ssl: {
        //   rejectUnauthorized: true,
        // },
        autoLoadEntities: true,
        entities: [Country, User, Trip, Destination, Activity, Flight],
        synchronize: true, // Auto-create tables (disable in production)
        migrations: ['migrations/*{.ts,.js}'],
      }),
    }),
  ],
})
export class DatabaseModule {}