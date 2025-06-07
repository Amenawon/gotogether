import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as dotenv from 'dotenv';

dotenv.config();

console.log('Using DB_URL:', process.env.DB_URL);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: process.env.DB_URL,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
        synchronize: false,
        autoLoadEntities: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: ['migrations/*{.ts,.js}'],
      }),
    }),
  ],
})
export class DatabaseModule {}
