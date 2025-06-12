import { Module } from '@nestjs/common';
import { VisaRequirementsController } from './visa-requirements.controller';
import { VisaRequirementsService } from './visa-requirements.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [VisaRequirementsController],
  providers: [VisaRequirementsService],
  exports: [VisaRequirementsService],
})
export class VisaRequirementsModule {}
