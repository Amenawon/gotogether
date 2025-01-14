import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; 
import { OpenaiModule } from './openai/openai.module';
import { FactFile } from './entity/factfile.entity';
import { PreHolidayAction } from './entity/preholiday-action.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [FactFile, Location, PreHolidayAction],
    synchronize: true,
    //autoLoadEntities:true
  }),
  ConfigModule.forRoot({ isGlobal: true }),  
  OpenaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
