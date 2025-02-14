import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import typeorm from './config/typeorm';
import { AmadeusModule } from './amadeus/amadeus.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
  //   TypeOrmModule.forRoot({
  //   type: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: 'password',
  //   database: 'gotogether',
  //   entities: [Location],
  //   synchronize: true,
  //   //autoLoadEntities:true
  // }), 
  ConfigModule.forRoot({
    isGlobal: true,
    load: [typeorm]
  }),
  DatabaseModule,
    TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
  }),
  AmadeusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
