import { Controller, Post, Body } from '@nestjs/common';
import { VisaRequirementsService } from './visa-requirements.service';
import { VisaRequirementsRequest } from 'src/models/visa-requirements';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('')
@ApiTags('Visa Requirements')
export class VisaRequirementsController {
  constructor(
    private readonly visaRequirementsService: VisaRequirementsService,
  ) {}

  @Post('get-visa-requirements')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        passport: { type: 'string', example: 'US' },
        destination: { type: 'string', example: 'India' },
      },
    },
  })
  getVisaRequirements(@Body() visaRequirementsRequest: VisaRequirementsRequest,) {
    return this.visaRequirementsService.getVisaRequirements(
      visaRequirementsRequest,
    );
  }
}
