import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { OpenaiModule } from './openai/openai.module';
import { FactFile } from './entity/factfile.entity';
import { PreHolidayAction } from './entity/preholiday-action.entity';
import typeorm from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'gotogether',
    entities: [FactFile, Location, PreHolidayAction],
    synchronize: true,
    //autoLoadEntities:true
  }), 
  ConfigModule.forRoot({
    isGlobal: true,
    load: [typeorm]
  }),
    TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
  }),
  ConfigModule.forRoot({ isGlobal: true }),  
  OpenaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
