import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors: true});

  // Swagger configuration
  // const config = new DocumentBuilder()
  //   .setTitle('My API')
  //   .setDescription('API documentation for My API')
  //   .setVersion('1.0')
  //   // .addBearerAuth() // If using JWT authentication
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
