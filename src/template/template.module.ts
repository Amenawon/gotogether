import { Module } from '@nestjs/common'; 
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller'; 
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [TemplateController],
  providers: [TemplateService],
  exports: [TemplateService],
})
export class TemplateModule {}
